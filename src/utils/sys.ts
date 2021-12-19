interface CarouselType {
  carId: string;
  background: string;
  fontColor?: string;
  primaryTitle?: string;
  secondaryTitle?: string;
}

/**
 * 先模拟数据，后期需要借助服务端动态获取
 */
export const CarouselData: CarouselType[] = [
  {
    carId: '1',
    background: 'https://kivens.oss-cn-hangzhou.aliyuncs.com/detective/pageBg.png',
    fontColor: '#C0C4CC',
    primaryTitle: '大屏大数据可视化解决方案',
    secondaryTitle: '免费定制属于自己的专属频道 (是的，我们免费)',
  },
  {
    carId: '2',
    background: 'https://kivens.oss-cn-hangzhou.aliyuncs.com/detective/world.jpg',
    fontColor: '#ffffff',
    primaryTitle: '我们接受您的任何定制需求',
    secondaryTitle: '但是能不能完成我也不知道',
  },
];

export const Exc: string = 'https://kivens.oss-cn-hangzhou.aliyuncs.com/detective/pageBg.png';
