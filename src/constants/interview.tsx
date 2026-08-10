import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { InterviewHistoryData } from '@/types/interview';

import addSrc from '@/public/images/common/add.png';
import andongSrc from '@/public/images/common/andong.png';
import ansanSrc from '@/public/images/common/ansan.png';
import armyTrainingSrc from '@/public/images/common/army-training.png';
import armySrc from '@/public/images/common/army.png';
import bonghwaSrc from '@/public/images/common/bonghwa.png';
import busanCitySrc from '@/public/images/common/busan-city.png';
import busanCentralSrc from '@/public/images/common/busan-middle.png';
import busanUniversitySrc from '@/public/images/common/busan-uni.png';
import busanoceanSrc from '@/public/images/common/busanocean.png';
import buyeoSrc from '@/public/images/common/buyeo.png';
import chuncheonSrc from '@/public/images/common/cc.png';
import changwonSrc from '@/public/images/common/changwon.png';
import changwonReparkSrc from '@/public/images/common/changwon-repark.png';
import cheongyangSrc from '@/public/images/common/cheongyang.png';
import chungnamEducationSrc from '@/public/images/common/chungnam-education.png';
import chungnamContentSrc from '@/public/images/common/chungnam-content.png';
import ckSrc from '@/public/images/common/ck.png';
import comwelSrc from '@/public/images/common/comwel.png';
import cooconSrc from '@/public/images/common/coocon.png';
import csSrc from '@/public/images/common/cs.png';
import deaguHanwiSrc from '@/public/images/common/daegu-hanwi.png';
import daeguSrc from '@/public/images/common/daegu.png';
import daewoongSrc from '@/public/images/common/daewoong.png';
import dangjinSrc from '@/public/images/common/dangjin.png';
import dapaSrc from '@/public/images/common/dapa.png';
import datastreamsSrc from '@/public/images/common/datastreams.png';
import datqSrc from '@/public/images/common/datq.png';
import dipSrc from '@/public/images/common/dip.png';
import donghaeSrc from '@/public/images/common/donghae.png';
import dongwonSrc from '@/public/images/common/dongwon.png';
import ekrSrc from '@/public/images/common/ekr.png';
import ezlSrc from '@/public/images/common/ezl.png';
import gbSrc from '@/public/images/common/gb.png';
import genSrc from '@/public/images/common/gen.png';
import geomdanSrc from '@/public/images/common/geomdan.png';
import geojeSrc from '@/public/images/common/geoje.png';
import gongjuSrc from '@/public/images/common/gongju.png';
import gongyoungHomeSrc from '@/public/images/common/gongyoung-home.png';
import grtcSrc from '@/public/images/common/grtc.png';
import gwangjuSrc from '@/public/images/common/gwangju.png';
import gyeonggiBusSrc from '@/public/images/common/gyeonggi-bus.png';
import gyeonggiSrc from '@/public/images/common/gyeonggi.png';
import gyeongnamSrc from '@/public/images/common/gyeongnam.png';
import hamanSrc from '@/public/images/common/haman.png';
import hanaInvestSrc from '@/public/images/common/hana-invest.png';
import hanpassSrc from '@/public/images/common/hanpass.png';
import hcSrc from '@/public/images/common/hc.png';
import hectoSrc from '@/public/images/common/hecto.png';
import hscitySrc from '@/public/images/common/hscity.png';
import hongseongSrc from '@/public/images/common/hongseong.png';
import injeSrc from '@/public/images/common/inje.png';
import jecheonSrc from '@/public/images/common/jecheon.png';
import jeonnamFireSrc from '@/public/images/common/jeonnam-fire.png';
import jeonnamGwangjuSchoolSrc from '@/public/images/common/jeonnam-gwangju-school.png';
import kepcoKdnSrc from '@/public/images/common/kepco-kdn.png';
import kepcoSrc from '@/public/images/common/kepco.png';
import kiboSrc from '@/public/images/common/kibo.png';
import konyangSrc from '@/public/images/common/konyang.png';
import koreaLocalSrc from '@/public/images/common/korea-local.png';
import koreaOceanSrc from '@/public/images/common/korea-ocean.png';
import billyangSrc from '@/public/images/common/milyang.png';
import mohwSrc from '@/public/images/common/mohw.png';
import nonsanSrc from '@/public/images/common/nonsan.png';
import novarexSrc from '@/public/images/common/novarex.png';
import osanSrc from '@/public/images/common/osan.png';
import pocheonSrc from '@/public/images/common/pocheon.png';
import pohangCitySrc from '@/public/images/common/pohang-city.png';
import pohangTechSrc from '@/public/images/common/pohang-tech.png';
import policeSrc from '@/public/images/common/police.png';
import poscoSrc from '@/public/images/common/posco.png';
import pyeongtaekSrc from '@/public/images/common/pyeongtaek.png';
import rokTrainSrc from '@/public/images/common/rok-train.png';
import rokafSrc from '@/public/images/common/rokaf.png';
import sachanSrc from '@/public/images/common/sacheon.png';
import samchuckSrc from '@/public/images/common/samchuck.png';
import sangjuSrc from '@/public/images/common/sangju.png';
import spoSrc from '@/public/images/common/spo.png';
import t3qSrc from '@/public/images/common/t3q.png';
import taeanSrc from '@/public/images/common/taean.png';
import ulsanCitySrc from '@/public/images/common/ulsan-city.png';
import ulsanJungguSrc from '@/public/images/common/ulsan-junggu.png';
import ulsanTechSrc from '@/public/images/common/ulsan-tech.png';
import uscSrc from '@/public/images/common/usc.png';
import yangcheonSrc from '@/public/images/common/yangcheon.png';
import yangguSrc from '@/public/images/common/yanggu.png';
import yangsSrc from '@/public/images/common/yangsan.png';
import ycgSrc from '@/public/images/common/ycg.png';
import yeojuSrc from '@/public/images/common/yeoju.png';
import yeongjuSrc from '@/public/images/common/yeongju.png';
import yeosuGwangyangSrc from '@/public/images/common/yesu-port.png';
import ysbsUniversitySrc from '@/public/images/common/ysbs-uni.png';

export const getInterviewHeaderData = async () => {
  const t = await getTranslations('interview.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: <div className='max-w-[699px]'>{t('description')}</div>,
    bgClassName: 'bg-interview-header',
    heightClassName: 'min-h-[350px] lg:min-h-[404px]',
  };
};

export const getInterviewlist = async (): Promise<InterviewHistoryData[]> => {
  const t = await getTranslations('interview');

  return [
    {
      category: t('category.0'),
      data: [
        { img: <Image src={spoSrc} alt='' width={65} />, text: '대검찰청' },
        { img: <Image src={policeSrc} alt='' width={118} />, text: '경찰청' },
        { img: <Image src={ekrSrc} alt='' width={180} />, text: '한국농어촌공사' },
        { img: <Image src={mohwSrc} alt='' width={149} />, text: '보건복지부' },
        { img: <Image src={kepcoSrc} alt='' width={128} />, text: '한국전력공사' },
        { img: <Image src={busanoceanSrc} alt='' width={130} />, text: '부산지방해양수산청' },
        { img: <Image src={comwelSrc} alt='' width={100} />, text: '근로복지공단' },
        { img: <Image src={gyeonggiSrc} alt='' width={167} />, text: '경기도' },
        { img: <Image src={gyeongnamSrc} alt='' width={122} />, text: '경상남도' },
        { img: <Image src={gbSrc} alt='' width={122} />, text: '경상북도' },
        { img: <Image src={gwangjuSrc} alt='' width={147} />, text: '광주광역시' },
        { img: <Image src={grtcSrc} alt='' width={150} />, text: '광주교통공사' },
        { img: <Image src={busanCitySrc} alt='' width={171} />, text: '부산광역시' },
        { img: <Image src={daeguSrc} alt='' width={182} />, text: '대구광역시' },
        { img: <Image src={ulsanCitySrc} alt='' width={146} />, text: '울산광역시' },
        { img: <Image src={hscitySrc} alt='' width={122} />, text: '화성특례시' },
        { img: <Image src={changwonSrc} alt='' width={117} />, text: '창원특례시' },
        { img: <Image src={nonsanSrc} alt='' width={107} />, text: '논산시' },
        { img: <Image src={andongSrc} alt='' width={142} />, text: '안동시' },
        { img: <Image src={pohangCitySrc} alt='' width={139} />, text: '포항시' },
        { img: <Image src={donghaeSrc} alt='' width={142} />, text: '동해시' },
        { img: <Image src={chuncheonSrc} alt='' width={142} />, text: '춘천시' },
        { img: <Image src={pyeongtaekSrc} alt='' width={57} />, text: '평택시' },
        { img: <Image src={sangjuSrc} alt='' width={116} />, text: '상주시' },
        { img: <Image src={yeojuSrc} alt='' width={115} />, text: '여주시' },
        { img: <Image src={pocheonSrc} alt='' width={117} />, text: '포천시' },
        { img: <Image src={yangsSrc} alt='' width={142} />, text: '양산시' },
        { img: <Image src={geojeSrc} alt='' width={142} />, text: '거제시' },
        { img: <Image src={gongjuSrc} alt='' width={142} />, text: '공주시' },
        { img: <Image src={sachanSrc} alt='' width={142} />, text: '사천시' },
        { img: <Image src={billyangSrc} alt='' width={142} />, text: '밀양시' },
        { img: <Image src={osanSrc} alt='' width={167} />, text: '오산시' },
        { img: <Image src={ansanSrc} alt='' width={128} />, text: '안산시' },
        { img: <Image src={jecheonSrc} alt='' width={143} />, text: '제천시' },
        { img: <Image src={dangjinSrc} alt='' width={142} />, text: '당진시' },
        { img: <Image src={samchuckSrc} alt='' width={113} />, text: '삼척시' },
        { img: <Image src={yeongjuSrc} alt='' width={127} />, text: '영주시' },
        { img: <Image src={yangcheonSrc} alt='' width={133} />, text: '양천구' },
        { img: <Image src={hcSrc} alt='' width={83} />, text: '합천군' },
        { img: <Image src={ycgSrc} alt='' width={133} />, text: '예천군' },
        { img: <Image src={uscSrc} alt='' width={60} />, text: '의성군' },
        { img: <Image src={csSrc} alt='' width={117} />, text: '청송군' },
        { img: <Image src={buyeoSrc} alt='' width={113} />, text: '부여군' },
        { img: <Image src={cheongyangSrc} alt='' width={156} />, text: '청양군' },
        { img: <Image src={yangguSrc} alt='' width={142} />, text: '양구군' },
        { img: <Image src={hamanSrc} alt='' width={158} />, text: '함안군' },
        { img: <Image src={taeanSrc} alt='' width={142} />, text: '태안군' },
        { img: <Image src={injeSrc} alt='' width={115} />, text: '인제군' },
        { img: <Image src={hongseongSrc} alt='' width={145} />, text: '홍성군' },
        { img: <Image src={bonghwaSrc} alt='' width={143} />, text: '봉화군' },
        { img: <Image src={ulsanJungguSrc} alt='' width={170} />, text: '울산광역시 중구' },
        { img: <Image src={geomdanSrc} alt='' width={154} />, text: '검단구' },
        { img: <Image src={busanCentralSrc} alt='' width={142} />, text: '부산광역시 중구' },
        { img: <Image src={dipSrc} alt='' width={158} />, text: '대구디지털혁신진흥원' },
        { img: <Image src={chungnamContentSrc} alt='' width={142} />, text: '충남콘텐츠진흥원' },
        { img: <Image src={koreaOceanSrc} alt='' width={142} />, text: '한국해양수산연수원' },
        { img: <Image src={kepcoKdnSrc} alt='' width={165} />, text: '한전KDN' },
        { img: <Image src={koreaLocalSrc} alt='' width={142} />, text: '한국지역정보개발원' },
        { img: <Image src={yeosuGwangyangSrc} alt='' width={142} />, text: '여수광양항만공사' },
        { img: <Image src={pohangTechSrc} alt='' width={142} />, text: '포항테크노파크' },
        { img: <Image src={ulsanTechSrc} alt='' width={160} />, text: '울산테크노파크' },
        { img: <Image src={changwonReparkSrc} alt='' width={99} />, text: '창원리포츠파크' },
        { img: <Image src={jeonnamFireSrc} alt='' width={180} />, text: '전남소방본부' },
      ],
    },
    {
      category: t('category.1'),
      data: [
        { img: <Image src={armySrc} alt='' width={175} />, text: '육군본부' },
        { img: <Image src={rokafSrc} alt='' width={167} />, text: '공군' },
        { img: <Image src={dapaSrc} alt='' width={80} />, text: '방위사업청' },
        { img: <Image src={datqSrc} alt='' width={145} />, text: '국방기술품질원' },
        { img: <Image src={armyTrainingSrc} alt='' width={90} />, text: '육군훈련소' },
        { img: <Image src={addSrc} alt='' width={158} />, text: '국방과학연구소' },
        { img: <Image src={rokTrainSrc} alt='' width={100} />, text: 'ROK-TRAIN' },
      ],
    },
    {
      category: t('category.2'),
      data: [
        { img: <Image src={hanaInvestSrc} alt='' width={150} />, text: '하나증권' },
        { img: <Image src={cooconSrc} alt='' width={156} />, text: '쿠콘' },
        { img: <Image src={hectoSrc} alt='' width={150} />, text: '헥토데이터' },
        { img: <Image src={hanpassSrc} alt='' width={164} />, text: '한패스' },
        { img: <Image src={ezlSrc} alt='' width={100} />, text: 'EZL' },
        { img: <Image src={kiboSrc} alt='' width={120} />, text: '기술보증기금' },
      ],
    },
    {
      category: t('category.3'),
      data: [
        { img: <Image src={jeonnamGwangjuSchoolSrc} alt='' width={130} />, text: '전남광주통합특성화교육청' },
        { img: <Image src={genSrc} alt='' width={170} />, text: '광주광역시교육청' },
        { img: <Image src={chungnamEducationSrc} alt='' width={160} />, text: '충청남도교육청' },
        { img: <Image src={busanUniversitySrc} alt='' width={150} />, text: '부산대학교' },
        { img: <Image src={ysbsUniversitySrc} alt='' width={170} />, text: '양산부산대학교병원' },
        { img: <Image src={konyangSrc} alt='' width={165} />, text: '건양대학교' },
        { img: <Image src={deaguHanwiSrc} alt='' width={170} />, text: '대구한의대학교' },
        { img: <Image src={ckSrc} alt='' width={170} />, text: '청강문화산업대학교' },
      ],
    },
    {
      category: t('category.4'),
      data: [
        { img: <Image src={poscoSrc} alt='' width={141} />, text: '포스코' },
        { img: <Image src={novarexSrc} alt='' width={160} />, text: 'NOVAREX' },
        { img: <Image src={daewoongSrc} alt='' width={160} />, text: '대웅제약' },
        { img: <Image src={dongwonSrc} alt='' width={170} />, text: '동원금속' },
        { img: <Image src={gongyoungHomeSrc} alt='' width={165} />, text: '공영홈쇼핑' },
        { img: <Image src={gyeonggiBusSrc} alt='' width={161} />, text: '경기도버스운송사업조합' },
        { img: <Image src={t3qSrc} alt='' width={129} />, text: 'T3Q' },
        { img: <Image src={datastreamsSrc} alt='' width={160} />, text: 'DataStreams' },
      ],
    },
  ];
};
