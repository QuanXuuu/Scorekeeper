import Player from "./Player.js";

export default {
  title: "Component/Player",
  component: Player,

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

export const Default = () => <li>Player Name</li>;
