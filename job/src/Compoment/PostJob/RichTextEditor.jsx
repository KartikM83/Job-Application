// RichTextEditor.jsx
import './styles.scss';

import React from 'react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';

import {
  IconBold,
  IconItalic,
  IconStrikethrough,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconPilcrow,
  IconList,
  IconListNumbers,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconAlignJustified,
  IconUnderline,
} from '@tabler/icons-react';

const RichEditor = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  const getButtonClass = (active, isLast) =>
    `flex items-center px-2 py-2 cursor-pointer ${active ? 'bg-bright-sun-400/20 text-bright-sun-400 border-none' : 'bg-mine-shaft-950 text-white'} ${!isLast ? 'border-r border-mine-shaft-900' : ''}`;


  return (
    <div className="control-group p-4 border-2 mb-0">
      <div className="button-group flex flex-wrap mb-0 gap-5">

        {/* Text Styles */}
        <div className="flex border border-mine-shaft-900 rounded-md overflow-hidden">
          <div className={getButtonClass(editor.isActive('bold'),false)}
               onClick={() => editor.chain().focus().toggleBold().run()}>
            <IconBold stroke={2} />
          </div>

          <div className={getButtonClass(editor.isActive('italic'),false)}
               onClick={() => editor.chain().focus().toggleItalic().run()}>
            <IconItalic stroke={2} />
          </div>

          <div className={getButtonClass(editor.isActive('strike'),false)}
               onClick={() => editor.chain().focus().toggleStrike().run()}>
            <IconStrikethrough stroke={2} />
          </div>

          <div className={getButtonClass(editor.isActive('underline'),false)}
               onClick={() => editor.chain().focus().toggleUnderline().run()}>
            <IconUnderline stroke={2} />
          </div>

          <div className={getButtonClass(editor.isActive('paragraph'),true)}
               onClick={() => editor.chain().focus().setParagraph().run()}>
            <IconPilcrow stroke={2} />
          </div>
        </div>

        {/* Headings */}
        <div className="flex border border-mine-shaft-900 rounded-md overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((level,index) => {
            const HeadingIcon = [IconH1, IconH2, IconH3, IconH4, IconH5, IconH6][level - 1];
            return (
              <div key={level}
                   className={getButtonClass(editor.isActive('heading', { level }),index === 5)}
                   onClick={() => editor.chain().focus().toggleHeading({ level }).run()}>
                <HeadingIcon stroke={2} />
              </div>
            );
          })}
        </div>

        {/* Text Align */}
        <div className="flex border border-mine-shaft-900 rounded-md overflow-hidden">
          {[
            { align: 'left', icon: IconAlignLeft },
            { align: 'center', icon: IconAlignCenter },
            { align: 'right', icon: IconAlignRight },
            { align: 'justify', icon: IconAlignJustified },
          ].map(({ align, icon: AlignIcon },index) => (
            <div key={align}
                 className={getButtonClass(editor.isActive({ textAlign: align }),index === 3)}
                 onClick={() => editor.chain().focus().setTextAlign(align).run()}>
              <AlignIcon stroke={2} />
            </div>
          ))}
        </div>

        {/* Lists */}
        <div className="flex border border-mine-shaft-900 rounded-md overflow-hidden">
          <div className={getButtonClass(editor.isActive('bulletList'),false)}
               onClick={() => editor.chain().focus().toggleBulletList().run()}>
            <IconList stroke={2} />
          </div>

          <div className={getButtonClass(editor.isActive('orderedList'),true)}
               onClick={() => editor.chain().focus().toggleOrderedList().run()}>
            <IconListNumbers stroke={2} />
          </div>
        </div>

        {/* Undo / Redo */}
        <div className="flex border border-mine-shaft-900 rounded-md overflow-hidden">
          <div className={getButtonClass(false,false)}
               onClick={() => editor.chain().focus().undo().run()}>
            <IconArrowBackUp stroke={2} />
          </div>

          <div className={getButtonClass(false,true)}
               onClick={() => editor.chain().focus().redo().run()}>
            <IconArrowForwardUp stroke={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Extensions config
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  Underline,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

// Initial content (can be empty or HTML)
const content = `<p>Hello! Start editing...</p>`;

// Export full editor with provider
export default function RichTextEditorWrapper() {
  return (
    <div className="editor-wrapper">
      <EditorProvider slotBefore={<RichEditor />} extensions={extensions} content={content} />
    </div>
  );
}
