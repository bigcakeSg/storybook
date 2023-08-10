import ButtonStory from '../components/buttonStory';

export default {
  title: 'Example/ButtonStory',
  component: ButtonStory,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
};

export const Classic = {
  args: {
    text: 'Button Story'
  }
};

export const Validation = {
  args: {
    text: 'Button Story',
    theme: 'validation'
  }
};

export const Alert = {
  args: {
    text: 'Button Story',
    theme: 'alert'
  }
};

export const AlertMini = {
  args: {
    text: 'Button Story',
    theme: 'alert',
    size: 'mini'
  }
};
