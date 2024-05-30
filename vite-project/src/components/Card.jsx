import * as PT from "prop-types";

const Card = ({ title, subTitle }) => (
  <div className="m-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10 m-20">
      <img
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        src="/public/vite.svg"
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {title ? <h4>{title}</h4> : null}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {subTitle}
      </span>
    </div>
  </div>
);

Card.propTypes = {
  title: PT.string,
  subTitle: PT.node,
};

export { Card };

//permet d'exporter un seul composant par défaut
//export default Card;
