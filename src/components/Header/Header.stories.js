import Header from "./Header.js";

export default {
  title: "Component/Header",
  component: Header,

  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

export const Default = () => <h1>Scorekeeper Version A</h1>;
