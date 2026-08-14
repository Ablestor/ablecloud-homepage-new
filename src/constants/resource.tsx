import { useLocale, useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';

import {
  CompatibilityCatalogLabels,
  CompatibilityCatalogRow,
  CompatibilityCatalogSection,
  EbookData,
} from '@/types/resource';

import ebook_1_Src from '@/public/images/resource/ebook/ebook_1.png';
import ebook_2_Src from '@/public/images/resource/ebook/ebook_2.png';
import ebook_3_Src from '@/public/images/resource/ebook/ebook_3.png';
import ebook_4_Src from '@/public/images/resource/ebook/ebook_4.png';
import ebook_5_Src from '@/public/images/resource/ebook/ebook_5.png';
import ebook_6_Src from '@/public/images/resource/ebook/ebook_6.png';
import ebook_7_Src from '@/public/images/resource/ebook/ebook_7.png';
import ebook_8_Src from '@/public/images/resource/ebook/ebook_8.png';
import ebook_9_Src from '@/public/images/resource/ebook/ebook_9.png';
import ebook_10_Src from '@/public/images/resource/ebook/ebook_10.png';
import ebook_11_Src from '@/public/images/resource/ebook/ebook_11.png';
import ebook_12_Src from '@/public/images/resource/ebook/ebook_12.png';
import ebook_14_Src from '@/public/images/resource/ebook/ebook_14.png';
import ebook_15_Src from '@/public/images/resource/ebook/ebook_15.png';
import ebook_16_Src from '@/public/images/resource/ebook/ebook_16.png';
import ebook_17_Src from '@/public/images/resource/ebook/ebook_17.png';
import ebook_18_Src from '@/public/images/resource/ebook/ebook_18.png';
import ebook_19_Src from '@/public/images/resource/ebook/ebook_19.png';
import ebook_20_Src from '@/public/images/resource/ebook/ebook_20.png';
import ebook_21_Src from '@/public/images/resource/ebook/ebook_21.png';
import ebook_22_Src from '@/public/images/resource/ebook/ebook_22.png';

export const resourceType = ['blog', 'video', 'ebook'] as const;

export const useResourceTabs = () => {
  const t = useTranslations('resources.tabs');
  const locale = useLocale();

  return [
    ...(locale === 'ko' ? [{ text: t('blog'), href: '/resource/blog' }] : []),
    { text: t('video'), href: '/resource/video' },
    { text: t('ebook'), href: '/resource/ebook' },
    { text: t('compatibility'), href: '/resource/compatibility' },
  ];
};

export const useResourceHeaderData = () => {
  const t = useTranslations('resources.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: t('description'),
    bgClassName: 'bg-resource-header',
    heightClassName: 'min-h-[350px] lg:min-h-[374px]',
  };
};

export const videosData: string[] = [
  'https://www.youtube.com/embed/nycSBkio2v4',
  'https://www.youtube.com/embed/6xLcY16LpgM',
  'https://www.youtube.com/embed/GHl3-2tg2b0',
  'https://www.youtube.com/embed/ury7M9NpBFE',
  'https://www.youtube.com/embed/hL9dMBIlQRE',
  'https://www.youtube.com/embed/aEZ3q1BTkmw',
  'https://www.youtube.com/embed/aYKeLLrlZ6o',
  'https://www.youtube.com/embed/hcGcB4NkmJk',
  'https://www.youtube.com/embed/ztn2Deth-yc',
  'https://www.youtube.com/embed/qyHcSTNEpAw',
  'https://www.youtube.com/embed/yjJnl-NMXiw',
  'https://www.youtube.com/embed/YskCBg_ZpPE',
  'https://www.youtube.com/embed/H1Tv5-7Pv2E',
  'https://www.youtube.com/embed/_i0oxkf_ReY',
];

export const getEbookData = async (): Promise<EbookData[]> => {
  const t = await getTranslations('resources.ebook');
  const locale = await getLocale();

  return [
    {
      type: 'ABLESTACK Technical White Paper',
      title: t('data.0.title'),
      description: t('data.0.description'),
      href: 'ABLESTACK_Technical.pdf',
      date: '2025.09.15',
      imgSrc: ebook_1_Src,
    },
    {
      type: 'ABLESTACK VS VMware',
      title: t('data.5.title'),
      description: t('data.5.description'),
      href: 'ABLESTACK-VMWare_vSphere.pdf',
      imgSrc: ebook_6_Src,
      date: '2025.08.26',
    },
    {
      type: 'ABLESTACK V2V',
      title: t('data.3.title'),
      description: t('data.3.description'),
      href: 'ABLESTACK_VMWare_Migration.pdf',
      imgSrc: ebook_4_Src,
      date: '2025.06.12',
    },
    {
      type: 'ABLESTACK P2V',
      title: t('data.4.title'),
      description: t('data.4.description'),
      href: 'ABLESTACK_P2V_Migration.pdf',
      imgSrc: ebook_5_Src,
      date: '2025.05.10',
    },
    {
      type: 'ABLESTACK with Oracle',
      title: t('data.2.title'),
      description: t('data.2.description'),
      href: 'ABLESTACK_for_Oracle_RAC.pdf',
      imgSrc: ebook_3_Src,
      date: '2025.07.24',
    },
    {
      type: 'ABLESTACK  VS VMware',
      title: t('data.11.title'),
      description: t('data.11.description'),
      href: 'ABLESTACK_VS_VMware.pdf',
      imgSrc: ebook_12_Src,
      date: '2025.02.16',
    },
    {
      type: 'ABLESTACK V2V',
      title: t('data.1.title'),
      description: t('data.1.description'),
      href: 'ABLESTACK_VMWare.pdf',
      imgSrc: ebook_2_Src,
      date: '2025.04.24',
    },
    {
      type: 'ABLESTACK Koral',
      title: t('data.6.title'),
      description: t('data.6.description'),
      href: 'ABLESTACK_Kubernetes_Cluster.pdf',
      imgSrc: ebook_7_Src,
      date: '2025.04.17',
    },
    {
      type: 'ABLESTACK Koral',
      title: t('data.7.title'),
      description: t('data.7.description'),
      href: 'ABLESTACK_Kubernetes_Cluster_Portainer.pdf',
      imgSrc: ebook_8_Src,
      date: '2025.04.08',
    },
    {
      type: 'ABLESTACK Over',
      title: t('data.8.title'),
      description: t('data.8.description'),
      href: 'ABLESTACK_HCI_ACTIVE.pdf',
      imgSrc: ebook_9_Src,
      date: '2025.03.18',
    },
    {
      type: 'ABLESTACK Link',
      title: t('data.9.title'),
      description: t('data.9.description'),
      href: 'ABLESTACK_LINK.pdf',
      imgSrc: ebook_10_Src,
      date: '2025.03.1',
    },
    {
      type: 'ABLESTACK Link',
      title: t('data.10.title'),
      description: t('data.10.description'),
      href: 'ABLESTACK_LINK_LOAD_BALANCER.pdf',
      imgSrc: ebook_11_Src,
      date: '2025.02.23',
    },

    {
      type: 'ABLESTACK Solution',
      title: t('data.13.title'),
      description: t('data.13.description'),
      href: 'ABLESTACK_관제 CCTV.pdf',
      date: '2025.10.16',
      imgSrc: ebook_14_Src,
    },
    {
      type: 'ABLESTACK Technical White Paper',
      title: t('data.14.title'),
      description: t('data.14.description'),
      href: 'ABLESTACK_Commvault_Backup_Solution.pdf',
      date: '2026.08.07',
      imgSrc: locale === 'ko' ? ebook_15_Src : ebook_17_Src,
    },
    {
      type: 'ABLESTACK Technical White Paper',
      title: t('data.15.title'),
      description: t('data.15.description'),
      href: 'ABLESTACK_NetBackup_Backup_Solution.pdf',
      date: '2026.08.07',
      imgSrc: locale === 'ko' ? ebook_16_Src : ebook_18_Src,
    },
    {
      type: 'ABLESTACK Technical White Paper',
      title: t('data.16.title'),
      description: t('data.16.description'),
      href: 'ABLESTACK_NAS_Backup_Solution.pdf',
      date: '2026.08.07',
      imgSrc: locale === 'ko' ? ebook_19_Src : ebook_20_Src,
    },
    {
      type: 'ABLESTACK Technical White Paper',
      title: t('data.17.title'),
      description: t('data.17.description'),
      href: 'ABLESTACK_Veeam_Backup_Solution.pdf',
      date: '2026.08.14',
      imgSrc: locale === 'ko' ? ebook_21_Src : ebook_22_Src,
    },
  ];
};

export const useCompatibilityList = () => {
  const t = useTranslations('resources.compatibility');

  return [
    {
      title: t('0.title'),
      description: t('0.description'),
      path: 'hypervisor',
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      path: 'server',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      path: 'guest-os',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      path: 'virtualization',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      path: 'external-storage',
    },
    {
      title: t('5.title'),
      description: t('5.description'),
      path: 'backup',
    },
  ];
};

export const compatibilityType = [
  'hypervisor',
  'server',
  'guest-os',
  'virtualization',
  'external-storage',
  'backup',
] as const;

export const getCompatibilityData = async () => {
  const t = await getTranslations('resources.compatibilityData');

  return {
    hypervisor: {
      title: t.rich('hypervisor.title', {
        br: () => <br />,
      }),
      descriptionList: [
        {
          description: t.rich('hypervisor.descriptionList.0.description', {
            br: () => <br />,
          }),
          list: [
            t('hypervisor.descriptionList.0.list.0'),
            t('hypervisor.descriptionList.0.list.1'),
            t('hypervisor.descriptionList.0.list.2'),
            t('hypervisor.descriptionList.0.list.3'),
          ],
        },
        {
          description: t('hypervisor.descriptionList.1.description'),
          list: [
            t('hypervisor.descriptionList.1.list.0'),
            t('hypervisor.descriptionList.1.list.1'),
          ],
        },
      ],
    },
    server: {
      title: t('server.title'),
      descriptionList: [
        {
          description: t('server.descriptionList.0.description'),
          list: [
            t('server.descriptionList.0.list.0'),
            t('server.descriptionList.0.list.1'),
            t('server.descriptionList.0.list.2'),
            t('server.descriptionList.0.list.3'),
            t('server.descriptionList.0.list.4'),
            t('server.descriptionList.0.list.5'),
            t('server.descriptionList.0.list.6'),
            t('server.descriptionList.0.list.7'),
            t('server.descriptionList.0.list.8'),
            t('server.descriptionList.0.list.9'),
            t('server.descriptionList.0.list.10'),
          ],
        },
      ],
    },
    'guest-os': {
      title: t('guest-os.title'),
      descriptionList: [
        {
          description: t('guest-os.descriptionList.0.description'),
          list: [
            t('guest-os.descriptionList.0.list.0'),
            t('guest-os.descriptionList.0.list.1'),
            t('guest-os.descriptionList.0.list.2'),
            t('guest-os.descriptionList.0.list.3'),
            t('guest-os.descriptionList.0.list.4'),
            t('guest-os.descriptionList.0.list.5'),
            t('guest-os.descriptionList.0.list.6'),
            t('guest-os.descriptionList.0.list.7'),
          ],
        },
      ],
    },
    virtualization: {
      title: t('virtualization.title'),
      descriptionList: [
        {
          description: t('virtualization.descriptionList.0.description'),
          list: [
            t('virtualization.descriptionList.0.list.0'),
            t('virtualization.descriptionList.0.list.1'),
            t('virtualization.descriptionList.0.list.2'),
            t('virtualization.descriptionList.0.list.3'),
            t('virtualization.descriptionList.0.list.4'),
            t('virtualization.descriptionList.0.list.5'),
            t('virtualization.descriptionList.0.list.6'),
            t('virtualization.descriptionList.0.list.7'),
            t('virtualization.descriptionList.0.list.8'),
          ],
        },
      ],
    },
    'external-storage': {
      title: t('external-storage.title'),
      descriptionList: [
        {
          description: t('external-storage.descriptionList.0.description'),
          list: [
            t('external-storage.descriptionList.0.list.0'),
            t('external-storage.descriptionList.0.list.1'),
            t('external-storage.descriptionList.0.list.2'),
            t('external-storage.descriptionList.0.list.3'),
            t('external-storage.descriptionList.0.list.4'),
            t('external-storage.descriptionList.0.list.5'),
          ],
        },
      ],
    },
    backup: {
      title: t('backup.title'),
      descriptionList: [
        {
          description: t('backup.descriptionList.0.description'),
          list: [t('backup.descriptionList.0.list.0'), t('backup.descriptionList.0.list.1')],
        },
      ],
    },
  };
};

const compatibilityImage = (id: number) => `/images/resource/compatibility/image-${id}.png`;

const row = (
  id: string,
  name: string,
  imageId: number | string | null,
  support: string | string[],
  notes?: string | string[],
): CompatibilityCatalogRow => ({
  id,
  name,
  imageLabel: name,
  imageSrc:
    typeof imageId === 'number'
      ? compatibilityImage(imageId)
      : imageId
        ? `/images/resource/compatibility/${imageId}.png`
        : undefined,
  support: Array.isArray(support) ? support : [support],
  notes: notes ? (Array.isArray(notes) ? notes : [notes]) : undefined,
});

const createCompatibilityCatalogSections = (
  t: (key: string) => string,
): CompatibilityCatalogSection[] => {
  const productHeader = {
    name: t('table.productName'),
    image: t('table.image'),
    support: t('table.support'),
    note: t('table.note'),
  };
  const makerHeader = {
    name: t('table.manufacturer'),
    image: t('table.image'),
    support: t('table.product'),
    note: t('table.note'),
  };

  return [
    {
      key: 'hypervisor',
      categoryLabel: t('categories.hypervisor'),
      title: t('sections.hypervisor'),
      headerLabels: productHeader,
      rows: [
        row('hypervisor-vmware', 'VMware', 1347, [
          'ESXi 8.0 U3',
          'ESXi 8.0 U2',
          'ESXi 8.0 U1',
          'ESXi 8.0',
          'ESXi 7.0 U3',
          'ESXi 7.0 U2',
          'ESXi 7.0 U1',
          'ESXi 7.0',
          'ESXi 6.0',
        ]),
        row('hypervisor-citrix', 'Citrix Hypervisor', 1345, ['8.2 CU1', '8.4']),
        row('hypervisor-kvm', 'KVM', 1344, [
          'Ubuntu 18.04 LTS',
          '20.04 LTS',
          'CentOS 7, 8',
          'RHEL 7, 8, 9',
          'Rocky Linux 8, 9',
          'openSUSE Leap 15',
          'SUSE Linux Enterprise Server 15',
        ]),
        row('hypervisor-xcp-ng', 'XCP-ng', 1346, ['8.2 CU1', '8.4']),
        row('hypervisor-hyper-v', 'Hyper-V', 1401, [
          t('products.windows2016OrLater'),
          t('products.hyperV2016OrLater'),
        ]),
      ],
    },
    {
      key: 'server',
      categoryLabel: t('categories.server'),
      title: t('sections.server'),
      headerLabels: makerHeader,
      rows: [
        row('server-hpe-dl560', 'HPE', 1348, 'ProLiant DL560 Gen11'),
        row('server-hpe-dl380', 'HPE', 1348, 'ProLiant DL380 Gen11'),
        row('server-dell-r770', 'Dell', 1359, 'PowerEdge R770'),
        row('server-dell-r760', 'Dell', 1359, 'PowerEdge R760'),
        row('server-dell-r750', 'Dell', 1359, 'PowerEdge R750'),
        row('server-dell-r730', 'Dell', 1359, 'PowerEdge R730'),
        row('server-dell-r650', 'Dell', 1359, 'PowerEdge R650'),
        row('server-ais-pr', 'AIS', 1360, ['AIS PR750', 'AIS PR760']),
        row('server-taejin-tr2260-1', t('manufacturers.taejin'), 1361, 'TNS TR2260 H4'),
        row('server-taejin-tr2260-2', t('manufacturers.taejin'), 1362, 'TNS TR2260 H4'),
        row('server-taejin-tr2220', t('manufacturers.taejin'), 1363, 'TNS TR2220 H4'),
        row('server-ucp-ha810', 'UCP', 1378, 'HC HA810 Gen3'),
        row('server-ucp-ha820', 'UCP', 1379, 'HC HA820 Gen3'),
        row('server-uniwide-rc228p', 'UNIWIDE', 1364, 'RC228P'),
        row('server-uniwide-re2200', 'UNIWIDE', 1365, 'RE2200'),
        row('server-ktnf-kr587s4-1', 'KTNF', 1366, 'CoreRidge KR587S4'),
        row('server-ktnf-kr587s4-2', 'KTNF', 1367, 'CoreRidge KR587S4'),
        row('server-ktnf-k2641a', 'KTNF', 1368, 'K2641A'),
        row('server-lenovo-sr660', 'Lenovo', 1369, 'ThinkSystem SR660'),
        row('server-lenovo-sr650', 'Lenovo', 1370, 'ThinkSystem SR650'),
        row('server-lenovo-sr590', 'Lenovo', 1371, 'ThinkSystem SR590'),
        row('server-lenovo-sr550', 'Lenovo', 1372, 'ThinkSystem SR550'),
        row('server-fujitsu-rx2540', 'FUJITSU', 1373, 'RX2540 M7'),
        row('server-3score-sr226a', t('manufacturers.threeSCore'), 1374, 'SR226A K4'),
        row('server-3score-sr285a', t('manufacturers.threeSCore'), 1375, 'SR285A C2'),
        row('server-3score-sr226s4', t('manufacturers.threeSCore'), 1376, 'SR226 S4'),
        row('server-3score-sr226k3', t('manufacturers.threeSCore'), 1377, 'SR226 K3'),
      ],
    },
    {
      key: 'san-switch',
      categoryLabel: t('sections.sanSwitch'),
      title: t('sections.sanSwitch'),
      headerLabels: makerHeader,
      rows: [
        row('san-brocade-g720', 'Brocade', 1380, 'Brocade G720'),
        row('san-brocade-g610', 'Brocade', 1381, 'Brocade G610'),
        row('san-dell-connectrix', 'Dell', 1384, 'Connectrix DS-6610B-L'),
      ],
    },
    {
      key: 'storage',
      categoryLabel: t('categories.storage'),
      title: t('sections.storage'),
      headerLabels: makerHeader,
      rows: [
        row('storage-fujitsu-dx600', 'Fujitsu', 1385, 'ETERNUS DX600 S6', 'SAN'),
        row('storage-hpe-msa2060', 'HPE', 1386, 'MSA 2060 Storage', 'SAN'),
        row('storage-hpe-primera600', 'HPE', 1387, 'Primera 600 Storage', 'SAN'),
        row('storage-dell-me5084', 'Dell', 1388, 'PowerVault ME5084', 'SAN'),
        row('storage-pure-x70r2', t('manufacturers.pureStorage'), 1389, 'X70R2', 'SAN'),
        row('storage-ibm-5035', 'IBM', 1390, 'FlashSystem 5035', 'SAN'),
        ...[
          ['PAS7700', 'synology-pas7700'],
          ['FS6420', 'synology-fs6420'],
          ['FS6400', 'synology-fs6400'],
          ['FS3420', 'synology-fs3420'],
          ['FS2500', 'synology-fs2500'],
          ['HD6500', 'synology-hd6500'],
          ['SA6400', 'synology-sa6400'],
          ['SA3610', 'synology-sa3610'],
          ['SA3410', 'synology-sa3410'],
          ['SA3400D', 'synology-sa3400d'],
          ['SA3200D', 'synology-sa3200d'],
          ['UC3400', 'synology-uc3400'],
          ['UC3200', 'synology-uc3200'],
          ['RS6426xs+', 'synology-rs6426xs-plus'],
          ['RS4826xs+', 'synology-rs4826xs-plus'],
          ['RS3626xs', 'synology-rs3626xs'],
          ['RS3621RPxs', 'synology-rs3621rpxs'],
          ['RS3618xs', 'synology-rs3618xs'],
          ['RS1626xs+', 'synology-rs1626xs-plus'],
        ].map(([product, image], index) =>
          row(`storage-synology-${index}`, 'Synology', image, product),
        ),
      ],
    },
    {
      key: 'l3-switch',
      categoryLabel: 'L3 SWITCH',
      title: 'L3 SWITCH',
      headerLabels: makerHeader,
      rows: [
        row('l3-cisco-9500', 'Cisco', 1393, 'Catalyst 9500 Series Switch'),
        row('l3-cisco-9400', 'Cisco', 1392, 'Catalyst 9400 Series Switch'),
        row('l3-cisco-9200l', 'Cisco', 1394, 'Catalyst 9200L'),
        row('l3-hpe-12900e', 'HPE', 1396, 'FlexFabric 12900E'),
        row('l3-hpe-aruba', 'HPE', 1395, 'ARUBA 1430-24G'),
        row('l3-juniper-ex4400', 'Juniper', 1397, 'Networks EX4400-48T'),
        row('l3-juniper-ex4600', 'Juniper', 1398, 'Networks EX4600 Switch'),
        row('l3-handreamnet-sg9500', t('manufacturers.handreamnet'), 1399, 'SG9500'),
        row('l3-handreamnet-sg9300', t('manufacturers.handreamnet'), 1400, 'SG9300'),
      ],
    },
    {
      key: 'guest-os',
      categoryLabel: 'Guest OS',
      title: 'GuestOS',
      headerLabels: productHeader,
      rows: [
        row('guest-redhat', 'Redhat Enterprise Linux', 1349, [
          'RHEL 10.X',
          'RHEL 9.X',
          'RHEL 8.X',
          'RHEL 7.X',
          'RHEL 6.X',
        ]),
        row('guest-oracle', 'Oracle Linux', 1350, [
          'Oracle Linux 10.X',
          'Oracle Linux 9.X',
          'Oracle Linux 8.X',
          'Oracle Linux 7.X',
          'Oracle Linux 6.X',
        ]),
        row('guest-suse', 'SUSE Enterprise Linux', 1351, 'SLES 16.0'),
        row('guest-rocky-linux', 'Rocky Linux', 1418, ['Rocky Linux 10', 'Rocky Linux 9']),
        row('guest-centos', 'CentOS', 1419, ['CentOS 8.5', 'CentOS 7.X', '*   EOL : 2021-11-16']),
        row('guest-ubuntu', 'Ubuntu', 1352, [
          'Ubuntu 26.X LTS',
          'Ubuntu 24.X LTS',
          'Ubuntu 22.X LTS',
          'Ubuntu 20.X LTS',
          'Ubuntu 18.X LTS',
          'Ubuntu 16.X LTS',
        ]),
        row('guest-windows-server', 'Windows Server', 1415, [
          'Windows Server 2025',
          'Windows Server 2022',
          'Windows Server 2019',
          'Windows server 2012',
        ]),
        row('guest-windows-desktop', 'Windows Desktop', 1415, ['Windows 11', 'Windows 10']),
      ],
    },
    {
      key: 'application',
      categoryLabel: t('categories.application'),
      title: t('sections.application'),
      headerLabels: productHeader,
      rows: [
        row('application-tilon', 'Tilon', 1353, 'DSatition', 'VDI'),
        row('application-citrix', 'Citrix', 1345, 'Virtual Apps & Dsektops'),
        row('application-innotium', t('manufacturers.innotium'), 1354, 'InnoECM'),
        row('application-tmax-soft', 'Tmax Soft', 1355, ['Webtob (WEB)', 'Jeus (WAS)']),
        row('application-tmax-tibero', 'Tmax Tibero', 1356, 'Tibero TAC (DB)'),
        row('application-oracle', 'Oracle', 1350, 'Oracle RAC (DB)'),
        row('application-microsoft', 'MicroSoft', 1357, 'MSSQL MSCS (DB)'),
        row('application-veritas', 'Veritas', 1413, 'Veritas InfoScale (HA)'),
        row('application-mantech', t('manufacturers.mantechSolution'), 1414, 'MCCS (HA)'),
        row('application-itplex', 'Itplex', 'image-itplex', 'ClusterPlex (HA)'),
        row('application-innodep', t('manufacturers.innodep'), 1156, 'VURIX (VMS)'),
        row('application-realhub', t('manufacturers.realhub'), 1157, 'XIDE-NVR (VMS)'),
        row('application-danusys', t('manufacturers.danusys'), 1158, 'Guardian Enterprise (VMS)'),
        row('application-emstone', t('manufacturers.emstone'), 'logo-4', 'REDBACK VMS (VMS)'),
        row('application-incon', t('manufacturers.incon'), 1159, 'Trium-I (VMS)'),
        row('application-milestone', t('manufacturers.milestoneSystems'), 1160, 'BriefCam (VMS)'),
      ],
    },
    {
      key: 'backup',
      categoryLabel: t('categories.backup'),
      title: t('sections.backup'),
      headerLabels: productHeader,
      rows: [
        row(
          'backup-commvault',
          'Commvault',
          1402,
          [
            t('backupSolutions.commvault.support.agentless'),
            t('backupSolutions.commvault.support.kvmHost'),
            t('backupSolutions.commvault.support.fullIncremental'),
          ],
          [
            t('backupSolutions.commvault.notes.executedBy'),
            t('backupSolutions.commvault.notes.managedBy'),
            t('backupSolutions.commvault.notes.version'),
          ],
        ),
        row(
          'backup-dell-networker',
          'Dell Networker',
          1403,
          [
            t('backupSolutions.networker.support.agentless'),
            t('backupSolutions.networker.support.externalDiskSnapshot'),
            t('backupSolutions.networker.support.full'),
          ],
          [
            t('backupSolutions.networker.notes.executedBy'),
            t('backupSolutions.networker.notes.managedBy'),
            t('backupSolutions.networker.notes.version'),
          ],
        ),
        row(
          'backup-veeam',
          'Veeam',
          1404,
          [
            t('backupSolutions.veeam.support.agentless'),
            t('backupSolutions.veeam.support.kvmHost'),
            t('backupSolutions.veeam.support.fullIncremental'),
          ],
          [
            t('backupSolutions.veeam.notes.executedBy'),
            t('backupSolutions.veeam.notes.managedBy'),
            t('backupSolutions.veeam.notes.version'),
          ],
        ),
        row(
          'backup-veritas',
          'Veritas NetBackup',
          1405,
          [
            t('backupSolutions.netbackup.support.agentless'),
            t('backupSolutions.netbackup.support.kvmHost'),
            t('backupSolutions.netbackup.support.fullIncremental'),
          ],
          [
            t('backupSolutions.netbackup.notes.executedBy'),
            t('backupSolutions.netbackup.notes.managedBy'),
            t('backupSolutions.netbackup.notes.version'),
          ],
        ),
        row('backup-synology-dp7400', 'Synology', 'synology-dp7400', 'DP7400'),
        row('backup-synology-dp7200', 'Synology', 'synology-dp7200', 'DP7200'),
        row('backup-synology-dp5200', 'Synology', 'synology-dp5200', 'DP5200'),
        row('backup-synology-dp320', 'Synology', 'synology-dp320', 'DP320'),
        row('backup-synology-dp340', 'Synology', 'synology-dp340-a', 'DP340'),
        row('backup-synology-abb', 'Synology ABB', 1406, [
          t('backupSolutions.synologyABB.support.agentless'),
          t('backupSolutions.synologyABB.support.kvmHost'),
          t('backupSolutions.synologyABB.support.fullIncremental'),
        ]),
      ],
    },
  ];
};

export const getCompatibilityCatalogData = async (): Promise<{
  categories: { key: string; label: string }[];
  labels: CompatibilityCatalogLabels;
  sections: CompatibilityCatalogSection[];
}> => {
  const t = await getTranslations('resources.compatibilityCatalog');
  const labels: CompatibilityCatalogLabels = {
    category: t('filters.category'),
    search: t('filters.search'),
    all: t('categories.all'),
    placeholder: t('filters.placeholder'),
    searchButton: t('filters.searchButton'),
    noResultsTitle: t('noResults.title'),
    noResultsDescription: t('noResults.description'),
    productColumn: t('table.productName'),
    imageColumn: t('table.image'),
    supportColumn: t('table.support'),
    noteColumn: t('table.note'),
  };

  const categories = [
    { key: 'all', label: labels.all },
    { key: 'hypervisor', label: t('categories.hypervisor') },
    { key: 'server', label: t('categories.server') },
    { key: 'san-switch', label: t('categories.sanSwitch') },
    { key: 'storage', label: t('categories.storage') },
    { key: 'l3-switch', label: t('categories.l3Switch') },
    { key: 'guest-os', label: 'Guest OS' },
    { key: 'application', label: t('categories.application') },
    { key: 'backup', label: t('categories.backup') },
  ];

  return { categories, labels, sections: createCompatibilityCatalogSections(t) };
};
