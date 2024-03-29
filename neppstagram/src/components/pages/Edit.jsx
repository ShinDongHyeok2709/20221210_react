import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Button } from "../common/Input";
import { converURL, getContentById, postContent } from "../../api/admin";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Preview({ url }) {
  return (
    <PreviewBox>
      <img src={url} alt="" />
    </PreviewBox>
  );
}

export default function Edit() {
  const [inputs, setInputs] = useState({ content: "", images: [] });
  const [previewURLs, setPreviewURLs] = useState([]);

  const { id } = useParams();

  const [post, setPost] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getContentById(id)
        .then((request) => {
          console.log("request : ", request);

          setPost(request);
          setInputs(() => ({ ...inputs, content: request.content }));

          setPreviewURLs(request.img_list.map((img) => img.url));

          Promise.all(
            request.img_list.map((img) => {
              const file = converURL(img.url);
              return file;
            })
          ).then((res) => console.log(res));
        })
        .catch((error) => console.log("error : ", error));
    }
  }, [id]);

  const handleInput = (e) => {
    setInputs((inputs) => ({ ...inputs, content: e.target.value }));
  };

  const handleSubmit = async (e) => {
    if (!inputs.content) {
      alert("content가 부재하니, 데이터를 등록하세요!");
      return;
    }
    if (inputs.images.length <= 1) {
      alert("이미지가 부재하니, 데이터를 등록하세요!");
      return;
    }

    console.log(inputs.images);
    const form = new FormData();

    form.append("content", inputs.content);
    inputs.images.forEach((image) => {
      form.append("images", image);
    });

    console.log("input : ", inputs);

    /* 
    postContent(form)
        .then((request) => {
          console.log("request : ", request);
          setInputs({ content: "", images: [] });
          //setPreviewURLs([]);
        })
        .catch((error) => console.log("error : ", error));
    */
    try {
      const post = await postContent(form);
      navigate("/post/" + post.id);
    } catch (error) {
      console.log("error", error);
      alert(error.response.data.message);
    }
  };

  const handleUploadImage = (e) => {
    const { files } = e.target;

    if (inputs.images.length + files.length > 5) {
      alert("사진은 5개 이하로 등록해 주세요!");
      return;
    }

    setPreviewURLs([]);

    setInputs((inputs) => {
      const prevImages = inputs.images;

      const arrayFile = [...prevImages, ...files];

      arrayFile.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPreviewURLs((urls) => [...urls, reader.result]);
        };
      });

      console.log(prevImages);

      return { ...inputs, images: [...prevImages, ...files] };
    });

    console.log("previewURLs : ", previewURLs);
    console.log("inputs : ", inputs);
  };

  console.log(inputs.images);

  return (
    <Container>
      <Textarea
        placeholder="글을 입력해 주세요!"
        value={post?.content}
        onChange={handleInput}
      ></Textarea>

      <ImageWrapper>
        {previewURLs.map((url, idx) => (
          <Preview url={url} key={idx} />
        ))}
        <BtnInput htmlFor="postImages">
          <BsFillPlusCircleFill color="#ccc" size={40} />
        </BtnInput>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="postImages"
          multiple
          onChange={handleUploadImage}
        />
      </ImageWrapper>
      <Button
        style={{ position: "relative", bottom: 0, left: 0 }}
        onClick={handleSubmit}
      >
        등록
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 20px;

  position: relative;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;

  border: 1px solid #eee;
  outline: none;
  resize: none;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const BtnInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  border: 2px solid #eee;
  cursor: pointer;
`;

const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  overflow: hidden;

  img {
    width: 200px;
  }
`;
