import { homeSolutionIcons1, homeSolutionIcons2 } from '@/constants/home';

import { Button } from '@/components/ui';

interface HomeInterviewProps {
  title: string;
}

export function HomeInterview({ title }: HomeInterviewProps) {
  const bannerWidth = {
    banner1: `w-[${homeSolutionIcons1.length * 158 - 8}px]`,
    banner1Wrapper: `w-[${homeSolutionIcons1.length * 158 * 2 - 8}px]`,
    banner2Wrapper: `w-[${homeSolutionIcons2.length * 158 * 2 - 8}px]`,
    banner2: `w-[${homeSolutionIcons2.length * 158 - 8}px]`,
  };

  const style = {
    banner1: {
      '--start-x': '0px',
      '--end-x': `-${homeSolutionIcons1.length * 158}px`,
    } as React.CSSProperties,
    banner2: {
      '--start-x': `-${homeSolutionIcons2.length * 158}px`,
      '--end-x': '0px',
    } as React.CSSProperties,
  };

  return (
    <div className='flex flex-col gap-[30px] '>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
        {title}
      </div>
      <div className='flex flex-col gap-4 hover-pause'>
        <div className='w-full overflow-hidden'>
          <div
            className={`${bannerWidth.banner1Wrapper} banner flex gap-2 animate-bannermovetoleft`}
            style={style.banner1}>
            <div className={`${bannerWidth.banner1} flex gap-2`}>
              {homeSolutionIcons1.map((icon, idx) => (
                <div
                  key={idx}
                  className='w-[150px] h-[100px] flex justify-center items-center bg-white rounded-[10px]'>
                  {icon}
                </div>
              ))}
            </div>
            <div className={`${bannerWidth.banner1} flex gap-2`}>
              {homeSolutionIcons1.map((icon, idx) => (
                <div
                  key={idx}
                  className='w-[150px] h-[100px] flex justify-center items-center bg-white rounded-[10px]'>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full overflow-hidden'>
          <div
            className={`${bannerWidth.banner2Wrapper} banner flex gap-2 animate-bannermovetoright`}
            style={style.banner2}>
            <div className={`${bannerWidth.banner2} flex gap-2`}>
              {homeSolutionIcons2.map((icon, idx) => (
                <div
                  key={idx}
                  className='w-[150px] h-[100px] flex justify-center items-center bg-white rounded-[10px]'>
                  {icon}
                </div>
              ))}
            </div>
            <div className={`${bannerWidth.banner2} flex gap-2`}>
              {homeSolutionIcons2.map((icon, idx) => (
                <div
                  key={idx}
                  className='w-[150px] h-[100px] flex justify-center items-center bg-white rounded-[10px]'>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button buttonData={{ text: '성공사례 더보기', href: '/' }} />
      </div>
    </div>
  );
}
