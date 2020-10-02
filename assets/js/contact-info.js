var call, sales, inquiries, support;

$('.btn').on('click', function () {
  html = $(this).html();
  switch (html) {
    case 'Call or email':
      call = 1;
      sales = 0;
      inquiries = 0;
      support = 0;
      break;
    case 'Support':
      support = 1;
      sales = 0;
      inquiries = 0;
      call = 0;
      break;
    case 'Sales':
      sales = 1;
      support = 0;
      inquiries = 0;
      call = 0;
      break;
    case 'General Inquiries':
      inquiries = 1;
      sales = 0;
      support = 0;
      call = 0;
      break;
  }
  if (sales === 1) {
    $('.sales').removeClass('visibility');
    $('.inquiries').addClass('visibility');
    $('.call').addClass('visibility');
    $('.support').addClass('visibility');
  }
  if (call === 1) {
    $('.call').removeClass('visibility');
    $('.inquiries').addClass('visibility');
    $('.sales').addClass('visibility');
    $('.support').addClass('visibility');
  }
  if (support === 1) {
    $('.support').removeClass('visibility');
    $('.inquiries').addClass('visibility');
    $('.call').addClass('visibility');
    $('.sales').addClass('visibility');
  }
  if (inquiries === 1) {
    $('.inquiries').removeClass('visibility');
    $('.sales').addClass('visibility');
    $('.call').addClass('visibility');
    $('.support').addClass('visibility');
  }
});
