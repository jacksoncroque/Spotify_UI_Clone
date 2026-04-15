import styles from "./main.module.scss";
import Popular from "./Popular/Popular";
import Music from "./Music/Music";
import Chart from "./Chart/Chart";
import MainFooter from "./MainFooter/MainFooter";


const populars = [
  {
    id: 1,
    url: "https://i.scdn.co/image/ab676161000051747eaa373538359164b843f7c0",
    name: "Beyoncé",
  },
  {
    id: 2,
    url: "https://i.scdn.co/image/ab676161000051747ad860b3610316cfbe994eab",
    name: "Luisa Sonza",
  },
  {
    id: 3,
    url: "https://i.scdn.co/image/ab67616100005174661d32816a6c01d1e1725cff",
    name: "Marina Sena",
  },
  {
    id: 4,
    url: "https://i.scdn.co/image/ab67616100005174e217d4439fd9951184118cdf",
    name: "Liniker",
  },
  {
    id: 5,
    url: "https://i.scdn.co/image/ab67616100005174daa7ed212f8ef16cf4d943e8",
    name: "NandaTsunami",
  },
  {
    id: 6,
    url: "https://i.scdn.co/image/ab67616100005174ca2fee52c41d3f58ceb6474b",
    name: "Doechii",
  },
  {
    id: 7,
    url: "https://i.scdn.co/image/ab676161000051746725802588d7dc1aba076ca5",
    name: "Ariana Grande",
  },
  {
    id: 8,
    url: "https://i.scdn.co/image/ab6761610000517478e45cfa4697ce3c437cb455",
    name: "Sabrina Carpenter",
  },
  {
    id: 9,
    url: "https://i.scdn.co/image/ab67616100005174777419bf9a701a78fdd6515f",
    name: "Anitta",
  },
  {
    id: 10,
    url: "https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6",
    name: "Lady Gaga",
  },
];

const musics = [
  {
    id: 1,
    url: "https://i.scdn.co/image/ab67616d00001e021381f350c5f7f620ee69a622",
    musicName: "Famoso Ímã | O poderoso chatão",
    autors: [
      "Mc Lele JP",
      "Mc Poze do Rodo",
      "Mc Leozinho ZS",
      "DJ GORDINHO DA VF",
    ],
  },
  {
    id: 2,
    url: "https://i.scdn.co/image/ab67616d00001e02cd6a20fcede386d2d3de6f91",
    musicName: "Cadeira Cativa - Ao Vivo",
    autors: ["Zé Neto & Cristiano"],
  },
  {
    id: 3,
    url: "https://i.scdn.co/image/ab67616d00001e02f1d02a6cec967f8b6b78f76e",
    musicName: "Beauty And A Beat",
    autors: ["Justin Bieber", "Nicki Minaj"],
  },
  {
    id: 4,
    url: "https://i.scdn.co/image/ab67616d00001e0221abbbb12bdff228230a3a46",
    musicName: "Se Saudade Sentir (Se Prepara 3)",
    autors: ["Mc Livinho", "Mc Pedrinho", "Perera DJ", "DJ JB Mix"],
  },
  {
    id: 5,
    url: "https://i.scdn.co/image/ab67616d00001e02520e9042f58bebdfa3665d17",
    musicName: "Choka Choka",
    autors: ["Anitta", "Shakira"],
  },
  {
    id: 6,
    url: "https://i.scdn.co/image/ab67616d00001e02e6a840b4d13f30e3e8e1c9b9",
    musicName: "Quem É Esse?-Ao Vivo",
    autors: ["Juliany Souza"],
  },
  {
    id: 7,
    url: "https://i.scdn.co/image/ab67616d00001e02212d776c31027c511f0ee3bc",
    musicName: "Let Me Love You",
    autors: ["DJ Snake", "Jutin Bieber"],
  },
  {
    id: 8,
    url: "https://i.scdn.co/image/ab67616d00001e02ae43783de8ad15d61203d4f3",
    musicName: "CARNAVAL",
    autors: ["Marina Sena", "Psirico"],
  },
  {
    id: 9,
    url: "https://i.scdn.co/image/ab67616d00001e02d29499a3340df1fb8cf58119",
    musicName: "Telefone",
    autors: ["Luisa Sonza"],
  },
  {
    id: 10,
    url: "https://i.scdn.co/image/ab67616d00001e02c7c031ce9d06b131f8563676",
    musicName: "Dracula - JENNIE Remix",
    autors: ["Tame Impala", "JENNIE"],
  },
];

const charts = [
  {
    id: 1,
    url: "https://charts-images.scdn.co/assets_generated/locale_pt/regional/weekly/region_global_default.jpg",
    name: "Mundo: seu relatório semanal das faixas mais tocadas no momento.",
  },
  {
    id: 2,
    url: "https://charts-images.scdn.co/assets_generated/locale_pt/regional/weekly/region_br_default.jpg",
    name: "Brasil: seu relatório semanal das faixas mais tocadas no momento.",
  },
  {
    id: 3,
    url: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
    name: "Mundo: seu relatório diário das faixas mais tocadas no momento.",
  },
  {
    id: 4,
    url: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_default.jpg",
    name: "Brasil: seu relatório semanal das faixas mais tocadas no momento.",
  },
  {
    id: 5,
    url: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg",
    name: "Mundo: seu relatório semanal das faixas mais tocadas no momento.",
  },
  {
    id: 6,
    url: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_br_default.jpg",
    name: "Brasil: seu relatório semanal das faixas mais tocadas no momento.",
  },
];

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.containerMainMusic}>
          <Music musics={musics} />
        </div>
        <div className={styles.containerMainPopular}>
          <Popular populars={populars} />
        </div>
        <div className={styles.containerMainCharts}>
          <Chart charts={charts} />
        </div>
        <div className={styles.containerMainFooter}>
          <MainFooter />
        </div>
      </div>
    </div>
  );
};

export default Main;
