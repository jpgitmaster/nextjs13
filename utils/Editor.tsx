import JoditEditor from 'jodit-react';
import React, { useRef } from 'react';

interface PropsDefinition {
  content: any;
  config: any;
  handleContent(data: any): void;
}

const JEditor = (props: PropsDefinition) => {
  const editor = useRef(null);
	// const [content, setContent] = useState('');
    return (
      <JoditEditor
        ref={editor}
        value={props.content}
        config={props.config}
        // tabIndex={1} // tabIndex of textarea
        onBlur={(newContent: any) => props.handleContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent: any) => {}}
      />
    )
};
  
export default JEditor;