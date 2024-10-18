import { gql } from '@apollo/client';

export const GET_UPLOADED_FILES = gql`
  query GetUploadedFiles {
    uploadedFiles {
      filename
      mimetype
      encoding
    }
  }
`;
