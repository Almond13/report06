let _noticeBtn = document.querySelector('.notice-btn');
        let _gallBtn = document.querySelector('.gallery-btn');
        let _noticeCon = document.querySelector('.notice-text');
        let _gallCon = document.querySelector('.notice-gall-content .img-box');

        _noticeBtn.addEventListener('click', function(){
        _gallCon.style.display = 'none';
        _noticeCon.style.display = '';
        _noticeBtn.classList.add('btn-active');
        _gallBtn.classList.remove('btn-active');
        });
        _gallBtn.addEventListener('click', function(){
        _noticeCon.style.display = 'none';
        _gallCon.style.display = 'grid';
        _gallBtn.classList.add('btn-active');
        _noticeBtn.classList.remove('btn-active');
        });