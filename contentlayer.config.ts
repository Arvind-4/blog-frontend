import { defineDocumentType, makeSource } from 'contentlayer/source-files';

interface Doc {
  _raw: {
    flattenedPath: string;
  };
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: Record<string, any> = {
  slug: {
    type: 'string',
    resolve: (doc: Doc) => doc._raw.flattenedPath,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc: Doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post],
});
