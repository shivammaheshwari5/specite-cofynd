import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { React, Component, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "./Seo.css";



function EditorConvertToHTML({ onEditorStateChange, editorState }) {
  
  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  console.log(editorState);
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}

export default EditorConvertToHTML;
