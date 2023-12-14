import React from 'react'
import "./EditBlog.css"
import ReactQuill from 'react-quill';
import uploadImg from "../../image/532-5320260_this-is-a-simple-example-on-how-to-removebg-preview.png";
import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetsingleBlog, UpdateBlogs } from '../../action/BlogAction';
import { toast } from 'react-toastify'

const EditBlog = () => {

  const { Singleblog, loading } = useSelector((state) => state.blog)

  const navigator = useNavigate()

  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [defaultImage, setDefaulImage] = useState(uploadImg);
  const [selectedOption, setSelectedOption] = useState("");
  const [values, setValue] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaKeyWord, setMetaKeyWord] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams()
  console.log(params.id);
  useEffect(() => {
    dispatch(GetsingleBlog(params.id))
  }, [])
  const handleImage = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setDefaulImage(reader.result);
        setImage(e.target.files[0]);
        console.log(image);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleChange = (e) => {
    setValue(e);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("mainheading", heading);
    formData.append("maincontent", content);
    formData.append("content", values);
    formData.append("meta_description", description);
    formData.append("meta_keywords", metaKeyWord);
    formData.append("meta_title", metaTitle);
    formData.append("url", url);
    formData.append("image", image);
    formData.append("category", selectedOption);
    console.log(...formData);

    try {
      await dispatch(UpdateBlogs(params.id, formData));
      navigator('/allblogs'); // Use React Router to navigate without a full page reload
    } catch (error) {
      console.error('Error updating new blog:', error);
    }

    //const res=axios.post("http://localhost:4000/api/blog/newblog",formData,{ withCredentials: true })
  };

  useEffect(() => {
    if (Singleblog) {
      setSelectedOption(Singleblog.category)
      setDefaulImage(Singleblog.imageurl)
      setHeading(Singleblog.mainheading)
      setContent(Singleblog.maincontent)
      setMetaTitle(Singleblog.meta_title)
      setMetaKeyWord(Singleblog.meta_keywords)
      setUrl(Singleblog.url)
      setDescription(Singleblog.meta_description)
      setValue(Singleblog.content)
    }
  }, [Singleblog])

  return (
    <div className="home" style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavBar />
        <div className="input_section">
          <form onSubmit={handleSubmit} className="form_input">
          <div className="Input_title_2">Select a Blog Image</div>
            <label htmlFor="image" className="custom-file-input">
              {<img src={image ? defaultImage : defaultImage} alt="" />}
            </label>
            <input type="file" onChange={handleImage} name="image" id="image" style={{ display: 'none' }} />
            <div className="input_option">
              <div className="Input_title">Category</div>
              <select className="select_input" value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select page</option>
                <option value="DeFi">
                  DeFi
                </option>
                <option value="Web3">
                  Web3
                </option>
                <option value="Web">
                  Web
                </option>
              </select>
              <div className="main_content">
                <div className="Input_title_2">Blog Title</div>
                <input
                  className="blog_input"
                  type="text"
                  // placeholder="Enter The Heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <div className="Input_title_2">URL</div>
                <input
                  className="blog_input"
                  type="text"
                  // placeholder="Enter the uniqueurl "
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <div className="Input_title_2">Meta Title</div>
                <input
                  className="blog_input"
                  type="text"
                  // placeholder="Enter the meta_title"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                />
                <div className="Input_title_2">Meta Description</div>
                <input
                  className="blog_input"
                  type="text"
                  // placeholder="Enter The meta_description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="Input_title_2">Meta Keyword</div>
                <input
                  className="blog_input"
                  type="text"
                  // placeholder="Enter The meta_keywords"
                  value={metaKeyWord}
                  onChange={(e) => setMetaKeyWord(e.target.value)}
                />
                <div className="Input_title_2">Content</div>
                <textarea
                className="Text_area"
                  type="text"
                  // placeholder="Enter some Content..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
            <ReactQuill
              className="text_area"
              placeholder="write some thing"
              formats={EditBlog.formats}
              modules={EditBlog.modules}
              value={values}
              onChange={handleChange}
            />
            <div className="buttons">
              <input
                type="submit"
                value={"submit"}
                className="create_blog_button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
EditBlog.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },

    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
EditBlog.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];
export default EditBlog
