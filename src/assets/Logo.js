import { color, useColorMode } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  const { colorMode } = useColorMode();

  const fillColor = colorMode === "dark" ? "#fafafa" : "#232323";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 70.959"
      fill={fillColor}
      w={[48]}
      height={48}
    >
      <path d="M49.726 37.783a.645.645 0 01-.387-1.164 1.863 1.863 0 10.905 1.596c0-.207-.035-.405-.098-.59a.645.645 0 01-.42.158z" />
      <path
        fill={fillColor}
        d="M51.172 0c-7.194 9.489-13.146 18.294-16.327 26.188C30.945 16.836 23.811 6.276 18.828 0 8.017 14.261 0 26.979 0 37.377c0 10.399 8.43 18.828 18.828 18.828 6.874 0 12.885-3.685 16.172-9.186 3.287 5.5 9.298 9.186 16.172 9.186C61.57 56.206 70 47.775 70 37.377S58.349 9.041 51.172 0zM18.491 46.745a9.321 9.321 0 110-18.643 9.321 9.321 0 010 18.643zm32.345 0a9.321 9.321 0 11-.002-18.642 9.321 9.321 0 01.002 18.642z"
      />
      <path
        fill={fillColor}
        d="M21.956 37.783a.648.648 0 01-.462-1.1 1.864 1.864 0 10.735 1.038.64.64 0 01-.273.062zM38.221 56.123c-.121.016-.24.034-.359.044-.12.013-.239.02-.358.024a4.365 4.365 0 01-.867-.047 1.254 1.254 0 01-.164-.034 2.07 2.07 0 01-.307-.097c-.048-.023-.097-.042-.142-.066l-.13-.078-.119-.09-.104-.103a1.387 1.387 0 01-.168-.239c-.027-.04-.045-.088-.064-.135-.02-.047-.041-.092-.053-.144l-.043-.15-.028-.159c-.018-.086-.02-.18-.027-.271.587-.292 1.593-1.307 2.04-2.771h-4.656c.448 1.437 1.362 2.394 1.95 2.728h-.004c-.008.111-.004.226-.019.334l-.021.163c-.007.055-.024.103-.035.155a.666.666 0 01-.043.15c-.02.047-.03.099-.055.143l-.068.132c-.028.039-.056.078-.083.119-.029.039-.065.071-.097.108-.032.036-.074.062-.11.095a1.36 1.36 0 01-.26.151c-.046.025-.099.039-.147.057-.049.021-.103.031-.156.045a1.21 1.21 0 01-.161.034c-.056.009-.11.019-.168.023a3.573 3.573 0 01-.346.02 6.049 6.049 0 01-.712-.043c-.12-.013-.239-.034-.359-.054a9.715 9.715 0 01-.722-.146c-.24-.057-.48-.12-.722-.19.211.137.434.254.66.364.228.109.463.202.702.288a5.883 5.883 0 00.741.203c.063.012.127.025.191.035l.195.024a3.501 3.501 0 00.601.011c.068-.003.137-.01.205-.022.068-.01.137-.021.206-.042.068-.019.138-.033.205-.062.137-.048.271-.114.396-.197.06-.045.125-.085.18-.137.054-.053.111-.104.16-.161.048-.059.094-.119.139-.18l.071-.126c.066.102.145.197.229.285l.168.148.184.125c.063.036.129.068.194.1.065.03.133.051.2.077a2.497 2.497 0 00.607.116 3.685 3.685 0 00.595-.005c.13-.013.259-.028.385-.052.127-.024.252-.049.375-.081.124-.03.246-.064.367-.102.24-.079.477-.165.705-.268.229-.102.453-.212.667-.342a14.276 14.276 0 01-1.441.293z"
      />
    </svg>
  );
};

export default Logo;
