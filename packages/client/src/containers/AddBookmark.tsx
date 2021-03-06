import React, { useState } from "react";
import styled from "styled-components";

const AddBookmark = () => {
  const [url, setUrl] = useState<string>();
  const [tags, setTags] = useState<string[]>();

  const onButtonPressed = () => {
    console.log(url, tags);
  };

  const onChangeUrl = (text: string | "") => setUrl(text);
  const onChangeTags = (text: string) => {
    const tagList = text.split(",");
    setTags(tagList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Paste URL"
        onChange={e => onChangeUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags separated by commas"
        onChange={e => onChangeTags(e.target.value)}
      />
      <button onClick={onButtonPressed}>Submit</button>
    </div>
  );
};

export default AddBookmark;
