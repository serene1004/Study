;(function($){

    var ajax = {

        init:function(){
            this.ajaxJsonFn();
            this.ajaxXmlFn();
            this.ajaxTxtFn();

        },
        ajaxJsonFn:function(){
            var $numBtn  = $('.json .num-btn');
            var $korBtn  = $('.json .kor-btn');
            var $engBtn  = $('.json .eng-btn');
            var $matBtn  = $('.json .mat-btn');
            var $rankBtn = $('.json .rank-btn');
            var $tBody   = $('.json .sungjuk tbody');

            var a = [];
            var temp = null;
            var rank = 1;
            var txt  = '';

            $numBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.json',
                        dataType:'json',
                        success:function(data){
                            $.each(data.성적표, function(idx, object){
                                a[idx] = [];
                                a[idx][0] = object.num;
                                a[idx][1] = object.name;
                                a[idx][2] = object.kor;
                                a[idx][3] = object.eng;
                                a[idx][4] = object.mat;
                                a[idx][5] = a[idx][2]+a[idx][3]+a[idx][4];
                                a[idx][6] = Math.round((a[idx][2]+a[idx][3]+a[idx][4])/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';
                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $korBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.json',
                        dataType:'json',
                        success:function(data){
                            $.each(data.성적표, function(idx, object){
                                a[idx] = [];
                                a[idx][0] = object.num;
                                a[idx][1] = object.name;
                                a[idx][2] = object.kor;
                                a[idx][3] = object.eng;
                                a[idx][4] = object.mat;
                                a[idx][5] = a[idx][2]+a[idx][3]+a[idx][4];
                                a[idx][6] = Math.round((a[idx][2]+a[idx][3]+a[idx][4])/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][2] < a[j][2]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';
                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $engBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.json',
                        dataType:'json',
                        success:function(data){
                            $.each(data.성적표, function(idx, object){
                                a[idx] = [];
                                a[idx][0] = object.num;
                                a[idx][1] = object.name;
                                a[idx][2] = object.kor;
                                a[idx][3] = object.eng;
                                a[idx][4] = object.mat;
                                a[idx][5] = a[idx][2]+a[idx][3]+a[idx][4];
                                a[idx][6] = Math.round((a[idx][2]+a[idx][3]+a[idx][4])/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][3] < a[j][3]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';
                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $matBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.json',
                        dataType:'json',
                        success:function(data){
                            $.each(data.성적표, function(idx, object){
                                a[idx] = [];
                                a[idx][0] = object.num;
                                a[idx][1] = object.name;
                                a[idx][2] = object.kor;
                                a[idx][3] = object.eng;
                                a[idx][4] = object.mat;
                                a[idx][5] = a[idx][2]+a[idx][3]+a[idx][4];
                                a[idx][6] = Math.round((a[idx][2]+a[idx][3]+a[idx][4])/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][4] < a[j][4]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';
                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $rankBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.json',
                        dataType:'json',
                        success:function(data){
                            $.each(data.성적표, function(idx, object){
                                a[idx] = [];
                                a[idx][0] = object.num;
                                a[idx][1] = object.name;
                                a[idx][2] = object.kor;
                                a[idx][3] = object.eng;
                                a[idx][4] = object.mat;
                                a[idx][5] = a[idx][2]+a[idx][3]+a[idx][4];
                                a[idx][6] = Math.round((a[idx][2]+a[idx][3]+a[idx][4])/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][8] > a[j][8]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';
                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });
 
        },
        ajaxXmlFn:function(){
            var $numBtn  = $('.xml .num-btn');
            var $korBtn  = $('.xml .kor-btn');
            var $engBtn  = $('.xml .eng-btn');
            var $matBtn  = $('.xml .mat-btn');
            var $rankBtn = $('.xml .rank-btn');
            var $tBody   = $('.xml .sungjuk tbody');

            var a = [];
            var temp = null;
            var rank = 1;
            var txt  = '';


            $numBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $korBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][2] < a[j][2]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $engBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][3] < a[j][3]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $matBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][4] < a[j][4]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $rankBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][8] > a[j][8]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

        },
        ajaxTxtFn:function(){
            var $addrBtn  = $('.txt .addr-btn');
            var $tBody   = $('.txt .sungjuk tbody');

            var a = [];
            var txt  = '';

            $addrBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.txt',
                        dataType:'text',
                        success:function(data){

                            var record = data.split('&');

                            $.each(record, function(idx){

                                var field = record[idx].split('_');

                                a[idx] = [];

                                a[idx][0] = field[0];
                                a[idx][1] = field[1];
                                a[idx][2] = field[2];
                                a[idx][3] = field[3];
                                a[idx][4] = field[4];
                            })
                            
                            for(var i=0; i<a.length; i++){
                                txt += '<tr>';
                                for(var j=0; j<5; j++){
                                    txt += '<td>'+ a[i][j] +'</td>';
                                }
                                txt += '</tr>';
                            }

                            $tBody.html(txt);
                            txt='';
                        }
                    });
                }
            });
        }

    }

    ajax.init();

})(jQuery);