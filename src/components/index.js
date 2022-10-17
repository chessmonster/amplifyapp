import Amplify from 'aws-amplify';
import config from '../aws-exports';

export { default as Navigation } from "./Navigation";
export { default as Footer } from "./Footer";
export { default as Home } from "./Home";
export { default as Callout } from "./Callout";
export { default as Callout2 } from "./Callout2";
export { default as About } from "./About";
export { default as Contact } from "./Contact";
export { default as Blog } from "./blog/Blog";
export { default as Posts } from "./blog/Posts";
export { default as Post } from "./blog/Post";
export { default as Googlepro } from "./Googlepro";
export { default as ImgToText } from "./ImgToText";
export { default as PdfToText } from "./PdfToText";
export { default as Mp4ToMp3 } from "./Mp4ToMp3";
export { default as Movie } from "./Movie";

Amplify.configure(config);