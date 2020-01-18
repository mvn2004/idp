var docInfo = {

  info: {
    title: 'Индивидуальный план развития на 2018-2019 г.г.',
    author: 'Миронович В.Н.',
    subject: 'Портфолио',
    keywords: 'Individual Developmet Plan'
  },

  pageSize: 'A4',
  pageMargins: [105, 64],

  footer: function (currentPage, pageCount) {
    return {
      text: currentPage.toString() + 'из' + pageCount,
      alignment: 'right',
      margin: [0, 30, 50, 50]
    }
  }
};

//pdfMake.createPdf(docInfo).open();