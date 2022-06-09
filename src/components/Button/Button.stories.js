import Button from "./Button.js";

export default {
  title: "Component/Button",
  component: Button,

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

export const Default = () => <Button>Reset Scores</Button>;
