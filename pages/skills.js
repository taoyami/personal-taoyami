import Layout from '../components/layout';
import Content from '../components/content';
const title = 'Навыки';

export default function skills() {
  return (
    <Layout title={title}>
      <Content title={title}>
        <ul>
          <li>Разработка контент-стратегии, включающей текстовые, визуальные форматы в рамках любых ресурсов компании (сайт, социальные сети, youtube, телеграм).</li>
          <li>Работа с креативной командой над созданием промо-материалов. Поиск исполнителей/партнеров для размещения и дальнейшего продвижения.</li>
          <li>Редактура и создание текстового контента — от коротких рекламных креативов до полноценных статей для блогов.</li>
          <li>Фотосъемка — репортажная, предметная, портретная, для контент-наполнения соцсетей с проработкой стратегии размещения.</li>
          <li>Навыки работы с продуктами Adobe — Photoshop, Lightroom, Premiere (работа с видеоконтентом), Muse (создание сайтов).</li>
          <li>Начальные навыки создания дизайн-продуктов (афиши, макеты для соцсетей, рекламные креативы) в Adobe Photoshop/Figma.</li>
          <li>Администрирование и наполнение контентом сайтов на Readymag, Tilda, WordPress, Wix, Adobe Muse. Ведение аналитики через Яндекс.Метрику.</li>
          <li>Настройка таргетированной рекламы в рекламных кабинетах Facebook, VK, Instagram, аналитика рекламного продвижения, использование сервисов парсинга Target Hunter (раньше), Церебро.</li>
          <li>Продвижение рекламных объявлений в тематических сообществах, создание различных конкурсных механик с целью продвижения/продаж.</li>
          <li>Настройка контекстной рекламы в Яндекс.Директ и аналитика объявлений через Яндекс.Метрика/Google.Analytics и Яндекс.Вордстат.</li>
        </ul>
      </Content>
    </Layout>
  );

}