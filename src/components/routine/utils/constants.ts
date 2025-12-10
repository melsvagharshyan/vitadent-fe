import specialist1 from '~/assets/vita-images/2025-08-07_10.06.37_mxr8hm.jpg'
import specialist2 from '~/assets/vita-images/2025-11-07_16.36.42_tqqavv.jpg'
import specialist3 from '~/assets/vita-images/2025-11-07_17.32.05_puqcvf.jpg'
import before1 from '~/assets/vita-images/IMG_5458_ouz7vr.jpg'
import after1 from '~/assets/vita-images/IMG_5459_rmwtol.jpg'
import before2 from '~/assets/vita-images/IMG_5402_ev87fp.jpg'
import after2 from '~/assets/vita-images/IMG_5403_oqjd52.jpg'
import before3 from '~/assets/vita-images/IMG_5409_vsmbzn.jpg'
import after3 from '~/assets/vita-images/IMG_5407_krvmtp.jpg'
import before4 from '~/assets/vita-images/IMG_5410_uq7fxo.jpg'
import after4 from '~/assets/vita-images/IMG_5408_fj9kot.jpg'
import before5 from '~/assets/vita-images/IMG_5412_2_ieesoo.jpg'
import after5 from '~/assets/vita-images/IMG_5406_2_w8j8ks.jpg'
import before6 from '~/assets/vita-images/IMG_5416_ia9f7w.jpg'
import after6 from '~/assets/vita-images/IMG_5415_vtuvor.jpg'
import before7 from '~/assets/vita-images/IMG_5417_zpmf3a.jpg'
import after7 from '~/assets/vita-images/IMG_5414_p8w9ez.jpg'
import before8 from '~/assets/vita-images/IMG_5418_yphpwu.jpg'
import after8 from '~/assets/vita-images/IMG_5413_pjdt5p.jpg'
import before9 from '~/assets/vita-images/IMG_5404_hefnhw.jpg'
import after9 from '~/assets/vita-images/IMG_5405_p8em2t.jpg'

// Our Working Process images
export const specialists = [
  {
    id: 1,
    image: specialist1,
    title: 'Варданян Ваган Араикович',
    description:
      'Семейный врач-стоматолог общей практики, выполняет эстетически  реставрации зубов, лечение, протезирование и удаление всех видов.',
  },
  {
    id: 2,
    image: specialist2,
    title: 'Драчкова Ирина Станиславовна',
    description:
      'Врач стоматолог высшей категории, специализируется на высококачественном лечении зубов и десен, хирургии',
  },
  {
    id: 3,
    image: specialist3,
    title: 'Зоткин Виталий Сергеевич',
    description:
      'Врач стоматолог 1й категории, специализируется на высоко эстетичных реставрациях зубов, лечение и протезирование всех видов',
  },
]

// Extended images for the detailed working process page
export const specialistImages = [...specialists]

// Client Before/After Results (без имплантации и ортодонтии)
export const clientResults = [
  {
    id: 1,
    before: before1,
    after: after1,
    title: 'Отбеливание зубов',
    description:
      'Проведена дентальная имплантация на нижней челюсти по протоколу «всё на 4х» имплантатах, фиксирована постоянная ортопедическая конструкция на нижнюю челюсть.',
    patientAge: '25 лет',
    treatmentDuration: '1 процедура',
  },
  {
    id: 2,
    before: before2,
    after: after2,
    title: 'Протезирование',
    description:
      'Восстановлены разрушенные передние зубы мостовидным протезом. Улыбка и жевательная функция полностью восстановлены.',
    patientAge: '32 года',
    treatmentDuration: '1 процедура',
  },
  {
    id: 3,
    before: before3,
    after: after3,
    title: 'Реставрация зубов',
    description:
      'Выполнено восстановление сколотого переднего зуба с помощью композитной реставрации. Улыбка стала ровной и естественной.',
    patientAge: '29 лет',
    treatmentDuration: '2 месяца',
  },
  {
    id: 4,
    before: before4,
    after: after4,
    title: 'Отбеливание зубов',
    description:
      'Удалены пятна и неровности эмали. Проведена композитная реставрация с восстановлением естественного блеска зубов.',
    patientAge: '25 лет',
    treatmentDuration: '1 процедура',
  },
  {
    id: 5,
    before: before5,
    after: after5,
    title: 'Отбеливание зубов',
    description:
      'Восстановлена форма и цвет зубов. После реставрации улыбка стала более ровной и сияющей.',
    patientAge: '25 лет',
    treatmentDuration: '1 процедура',
  },
  {
    id: 6,
    before: before6,
    after: after6,
    title: 'Отбеливание зубов',
    description:
      'Устранены сколы и потемнение эмали. Композитная реставрация вернула зубам природный цвет и гладкость.',
    patientAge: '25 лет',
    treatmentDuration: '1 процедура',
  },
  {
    id: 7,
    before: before7,
    after: after7,
    title: 'Композитная реставрация',
    description:
      'Устранены дефекты передних зубов и выполнена композитная реставрация. Восстановлена ровность зубного ряда и естественный оттенок эмали.',
    patientAge: '28 лет',
    treatmentDuration: '2 процедуры',
  },
  {
    id: 8,
    before: before8,
    after: after8,
    title: 'Композитная реставрация',
    description:
      'Исправлены небольшие дефекты и неровности передних зубов. Композитная реставрация улучшила внешний вид улыбки и восстановила симметрию.',
    patientAge: '30 лет',
    treatmentDuration: '1 процедура',
  },
  {
    id: 9,
    before: before9,
    after: after9,
    title: 'Установка виниров',
    description:
      'Устранено сильное разрушение и потемнение зубов. Установлены керамические виниры E-max с естественным оттенком.',
    patientAge: '35 лет',
    treatmentDuration: '3 недели',
  },
]

// Extended client results for detailed page
export const detailedClientResults = [...clientResults]
