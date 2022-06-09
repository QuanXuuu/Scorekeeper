import PlayerForm from "./PlayerForm.js";

export default {
  title: "Component/PlayerForm",
  component: PlayerForm,

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

export const Default = () => <label>Add Name:</label>;
