import BannerStory from '../components/bannerStory';

export default {
  title: 'Example/BannerStory',
  component: BannerStory,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
};

export const Standard = {
  args: {
    text: 'Banner Story'
  }
};

export const Black = {
  args: {
    text: 'Banner Story',
    black: true
  }
};
