import React from 'react'
// import "./EditBlog.css"
import uploadImg from "../../image/532-5320260_this-is-a-simple-example-on-how-to-removebg-preview.png";
import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetsinglePage, UpdatePages } from '../../action/PageAction';

const EditPage = () => {

    const { singlePage, loading } = useSelector((state) => state.page)

    console.log(singlePage);

    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [defaultImage, setDefaultImage] = useState(uploadImg);
    const [selectedOption, setSelectedOption] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaKeyWord, setMetaKeyWord] = useState("");
    const [description, setDescription] = useState("");
    const navigator = useNavigate();

    const params = useParams()

    useEffect(() => {
        dispatch(GetsinglePage(params.id))
      }, [])

    const handleImage = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setDefaultImage(reader.result);
                setImage(e.target.files[0]);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("meta_description", description);
        formData.append("meta_keywords", metaKeyWord);
        formData.append("meta_title", metaTitle);
        formData.append("image", image);
        formData.append("page", selectedOption);
        console.log(...formData);

        try {
            await dispatch(UpdatePages( params.id, formData));
            navigator("/allpages")
        } catch (error) {
            console.error('Error creating new blog:', error);
        }
    };


    useEffect(() => {
        if (singlePage) {
        setSelectedOption(singlePage.page)
          setDefaultImage(singlePage.imageurl)
          setMetaTitle(singlePage.meta_title)
          setMetaKeyWord(singlePage.meta_keywords)
          setDescription(singlePage.meta_description)
        }
      }, [singlePage])

    return (
        <div className="home" style={{ display: "flex", width: "100%" }}>
            <Sidebar />
            <div style={{ width: "100%" }}>
                <NavBar />
                <div className="input_section">
                    <form onSubmit={handleSubmit} className="form_input">
                        <div className="Input_title_2">Select an Og Image</div>
                        <label htmlFor="image" className="custom-file-input">
                            {<img src={image ? defaultImage : defaultImage} alt="" />}
                        </label>
                        <input type="file" onChange={handleImage} name="image" id="image" style={{ display: 'none' }} />
                        <div className="input_option">
                            <div className="Input_title">Pages</div>
                            <select className="select_input" value={selectedOption} onChange={handleOptionChange}>
                                <option value="">Select page</option>
                                <option value="About">About</option>
                                <option value="Earn">Earn</option>
                                <option value="Blog">Blog</option>
                                <option value="Home">Home</option>
                            </select>
                            <div className="main_content">
                                <div className="Input_title_2">Meta Title</div>
                                <input
                                    className="blog_input"
                                    type="text"
                                    value={metaTitle}
                                    onChange={(e) => setMetaTitle(e.target.value)}
                                />
                                <div className="Input_title_2">Meta Description</div>
                                <input
                                    className="blog_input"
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <div className="Input_title_2">Meta Keyword</div>
                                <input
                                    className="blog_input"
                                    type="text"
                                    value={metaKeyWord}
                                    onChange={(e) => setMetaKeyWord(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <input
                                type="submit"
                                value={"Submit"}
                                className="create_blog_button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPage
