import React, { useState, useRef } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

const MyEditor = () => {
  const [editor, setEditor] = useState(null);
  const inputRef = useRef(null);

  const handleImageUpload = (file) => { // No async/await needed
    try {
      const imageUrl = URL.createObjectURL(file); // Create temporary URL

      editor.chain().setImage({ src: imageUrl }).run(); // Insert the image

    } catch (error) {
      console.error('Error handling image:', error);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const editorInstance = useEditor({
    content: '<p>Initial content here.</p>',
    extensions: [
      StarterKit,
      Image.configure({
        allowDrop: true, // Keep drag and drop functionality
        // No onUpload needed here
      }),
    ],
    onUpdate: ({ editor }) => {
      //console.log('Content changed:', editor.getHTML());
    },
    onEditorChange: ({ editor }) => {
      setEditor(editor);
    },
    onDrop: (event) => {
      event.preventDefault(); // Prevent default drag behavior
      const file = event.dataTransfer.files[0]; // Get the dropped file
      if (file && file.type.startsWith("image/")) {
        handleImageUpload(file);
      }
    },
    onPaste: (event) => {
      event.preventDefault();
      console.log("onPaste triggered");
    },
  });

  if (!editorInstance) {
    return null;
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Upload Image</button>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleInputChange}
        accept="image/*"
      />
      <EditorContent editor={editorInstance} />
    </div>
  );
};

export default MyEditor;