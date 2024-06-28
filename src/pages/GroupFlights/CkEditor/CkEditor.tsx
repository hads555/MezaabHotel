import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface CKEditorProps {
  initialData?: string;
  onChange?: (data: string) => void;
}

const Ckeditor: React.FC<CKEditorProps> = ({ initialData = '', onChange }) => {
  const [editorData, setEditorData] = useState<string>(initialData);

  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={(event, editor) => {
        const data = editor.getData();
        setEditorData(data);
        if (onChange) {
          onChange(data);
        }
      }}
    />
  );
};

export default Ckeditor;