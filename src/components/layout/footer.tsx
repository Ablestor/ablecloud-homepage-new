'use client';

import { useLocale, useTranslations } from 'next-intl';

import { useState } from 'react';

import Ablecloud from '@/public/icons/common/ablecloud.svg';
import Blog from '@/public/icons/common/blog.svg';
import Community from '@/public/icons/common/community.svg';
import RelatedSitesArrow from '@/public/icons/common/related-sites-arrow.svg';
import Youtube from '@/public/icons/common/youtube.svg';

import { Link } from '@/i18n/routing';

function TooltipWrapper({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className='relative group flex items-center justify-center'>
      {children}
      <div
        className='absolute -top-6 left-1/2 -translate-x-1/2 
                   opacity-0 translate-y-2 
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-200 ease-out
                   bg-black text-white text-sm rounded-md px-3 py-1 
                   shadow-md whitespace-nowrap'>
        {label}
        <div
          className='absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                     border-l-6 border-r-6 border-t-6 border-transparent border-t-black'
        />
      </div>
    </div>
  );
}

export function Footer() {
  const t = useTranslations('footer');

  const locale = useLocale();
  const [isRelatedSitesOpen, setIsRelatedSitesOpen] = useState(false);

  return (
    <div className='flex justify-center w-full bg-[#F9F9F9]'>
      <div className='flex flex-col gap-3 max-w-[1440px] w-full py-8 px-6 md:gap-4'>
        <div className='flex flex-col gap-3 md:flex-row md:gap-0'>
          <div className='flex flex-1 flex-col gap-4'>
            <div className='flex items-center md:h-[40px]'>
              <Link href={'/'}>
                <Ablecloud />
              </Link>
            </div>
            <div className='flex gap-1'>
              <Link href='https://blog.naver.com/ablecloud_official' target='_blank'>
                <TooltipWrapper label='블로그'>
                  <Blog />
                </TooltipWrapper>
              </Link>
              <Link href='https://www.youtube.com/@ablecloud_official' target='_blank'>
                <TooltipWrapper label='유튜브'>
                  <Youtube />
                </TooltipWrapper>
              </Link>
              {locale === 'ko' ? (
                <>
                  {' '}
                  <Link href='https://community.ablecloud.io/' target='_blank'>
                    <TooltipWrapper label='커뮤니티'>
                      <Community />
                    </TooltipWrapper>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={`relative max-w-[342px] w-full self-start ${isRelatedSitesOpen ? 'z-20' : ''}`}>
            <button
              type='button'
              aria-expanded={isRelatedSitesOpen}
              onClick={() => setIsRelatedSitesOpen(isOpen => !isOpen)}
              className='flex h-[40px] w-full items-center justify-between rounded-[5px] bg-[#202020] px-[14px] text-left text-sm font-bold tracking-[-0.3px] text-white'>
              <span>ABLESTACK RELATED SITES</span>
              <RelatedSitesArrow
                className={`h-6 w-6 transition-transform ${isRelatedSitesOpen ? 'rotate-180' : ''}`}
                aria-hidden='true'
              />
            </button>
            {isRelatedSitesOpen && (
              <div
                id='related-sites-menu'
                className='absolute right-0 top-full z-10 flex w-full flex-col rounded-[5px] bg-[#202020]/30 px-[14px] text-sm font-bold tracking-[-0.3px] text-white'>
                <Link
                  href='https://docs.ablecloud.io/'
                  target='_blank'
                  className='-mx-[14px] px-[14px] leading-[40px] transition-colors hover:bg-[#202020]/50'>
                  ABLESTACK DOCUMENT SITE
                </Link>
                <Link
                  href='https://partner.ablecloud.io/'
                  target='_blank'
                  className='-mx-[14px] px-[14px] leading-[40px] transition-colors hover:bg-[#202020]/50'>
                  ABLECLOUD PARTNER PORTAL
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <Link href={''} className='flex text-[#222222] w-fit items-center'>
          <div className='text-[12px] font-bold leading-[15.6px] underline underline-offset-2'>
            개인정보 처리방침
          </div>
          <ChevronRight width={16} height={16} className='text-[#222222]' />
        </Link> */}
        <div className='flex flex-col gap-0 text-[#999999] font-bold tracking-[-0.4px] leading-[20.6px] text-[14px] lg:leading-[19.2px] lg:gap-2'>
          <div className='flex flex-col lg:flex-row'>
            <div>{t('bizLicense')} : 886-86-02158</div>
            <span className='mx-3 hidden lg:block'>|</span>
            <div>
              {t('name.label')} : {t('name.value')}
            </div>
            {locale === 'ko' ? (
              <>
                <span className='mx-3 hidden lg:block'>|</span>
                <div>
                  {t('contact.label')} : {t('contact.value')}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className='flex flex-col lg:flex-row'>
            <div>
              {t('headOfficeAddress.label')} : {t('headOfficeAddress.value')}
            </div>

            <span className='mx-3 hidden lg:block'>|</span>
            <div>
              {t('rndCenterAddress.label')} : {t('rndCenterAddress.value')}
            </div>
            <span className='mx-3 hidden lg:block'>|</span>
            <div>
              {t('yeongnamAddress.label')} : {t('yeongnamAddress.value')}
            </div>
          </div>
        </div>

        <div className='text-[#999999] font-medium text-[14px]'>
          ⓒ ABLECLOUD Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
