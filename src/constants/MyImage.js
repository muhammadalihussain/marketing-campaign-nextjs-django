import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/test-cm-company/image/upload/w_${width},q_${
    quality || 75
  }/${src}`;
};
const MyImage = (props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image loader={myLoader} {...props} />;
};

export default MyImage;
