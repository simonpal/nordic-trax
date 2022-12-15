import { render } from "storyblok-rich-text-react-renderer";

const RichText = ({ blok }) => {
  const { content } = blok;
  return render(content);
};

export default RichText;
