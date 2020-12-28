
        var Body = { // Body 객체 생성
            setColor : function (color) //메소드
            {
                document.querySelector('body').style.color = color;
            },
            setBgColor : function (color) //메소드
            {
                document.querySelector('body').style.backgroundColor = color;
            }
    
            };
    
            var Links = { //Links 객체 생성
                setColor : function (color) //메소드
                {
                    var alist = document.querySelectorAll('a');
                        var i = 0;
                        while (i < alist.length) {
                            alist[i].style.color = color;
                            i = i + 1;
                        }
                }
            };
    
            function nightDayHandler(self)
            {
                var target = document.querySelector('body');
                if (self.value === 'night') {
                    Body.setBgColor('black');
                    Body.setColor('white');
                    self.value = 'day';
                    Links.setColor('powderblue');
    
                }
                else {
                    Body.setBgColor('white');
                    Body.setColor('black');
                    self.value = 'night';
                    Links.setColor('blue');
                }
            }
    