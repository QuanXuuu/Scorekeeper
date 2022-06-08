import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,

  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '3em', maxWidth: '300px' }}>
          <Story />
        </div>
      );
    },
  ],
};

};

export const Default = () => <Button >Click here</Button>;