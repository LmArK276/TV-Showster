var indeks = 0;
var serije;
var zanrovi = new Array();




function postaviRandomSliku() //za menjanje slika na pozadini
{
    var header = document.getElementById("pozadina");
    
    var slike = [
        'url("images/1.jpg")',
        'url("images/2.jpg")',
        'url("images/3.jpg")',
        'url("images/4.jpg")',
        'url("images/5.jpg")'
        
    ];
    
  
    
    
  
    
    var pozadina = slike[indeks];
    indeks += 1;
    header.style.backgroundImage = pozadina;
    
    
    if(indeks == 5) //kad dodje do poslednje, vrati na prvu
        indeks = 0;
   
}

function menjajPozadinu()
{
        if (document.images) { //preload slike 
            img1 = new Image();
            img2 = new Image();
            img3 = new Image();
            img4 = new Image();
            img5 = new Image();

            img1.src = "images/1.jpg";
            img2.src = "images/2.jpg";
            img3.src = "images/3.jpg";
            img4.src = "images/4.jpg";
            img5.src = "images/5.jpg";
                            }
    
    
        var header = document.getElementById("pozadina");
        header.style.backgroundImage = "url('images/1.jpg')";
        
        
        setInterval(postaviRandomSliku,4000); //menja slike na svake 4 sekunde
    
}


function srediIspis(k) {
  if (k < 10) {
    return "0" + k; //da bude 04 a ne samo 4 npr.(ako je jednocifren)
  }
  else {
    return k;
  }
}

function srediVreme() { //refreshuje sat na svaku sekundu
    var date = new Date(); 
    var sat = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    sat = srediIspis(sat);
    min = srediIspis(min);
    sec = srediIspis(sec);
    document.getElementById("sat").innerText = sat + " : " + min + " : " + sec; 
    setTimeout(function(){ srediVreme(); }, 1000); 
}









function displayFrnds()//opis za Friends, gasi sve ostale, pali friends
{
       var frnds = document.getElementById("descFrnds");
       var got = document.getElementById("descGot");
       var h_tale = document.getElementById("descHtale");
       var twd = document.getElementById("descTwd");
       
       
       
       
      
         frnds.style.display = "block";
         got.style.display = "none";
         twd.style.display = "none";
         h_tale.style.display = "none";
       
        
       
}


function displayGot()// isto ko gore
{
       var frnds = document.getElementById("descFrnds");
       var got = document.getElementById("descGot");
       var h_tale = document.getElementById("descHtale");
       var twd = document.getElementById("descTwd");
    
      
       got.style.display = "block";
       frnds.style.display = "none";
       twd.style.display = "none";
       h_tale.style.display = "none";
      
}


function displayTwd()//isto ko gore
{
       var frnds = document.getElementById("descFrnds");
       var got = document.getElementById("descGot");
       var h_tale = document.getElementById("descHtale");
       var twd = document.getElementById("descTwd");
    
      
       got.style.display = "none";
       frnds.style.display = "none";
       twd.style.display = "block";
       h_tale.style.display = "none";
      
}


function displayHtale() //isto ko gore
{
    var frnds = document.getElementById("descFrnds");
       var got = document.getElementById("descGot");
       var h_tale = document.getElementById("descHtale");
       var twd = document.getElementById("descTwd");
    
      
       got.style.display = "none";
       frnds.style.display = "none";
       twd.style.display = "none";
       h_tale.style.display = "block";
      
}


function proveriForme()// provera forme za newsletter
{
    var fnameVal = document.getElementById("fname").value;
    var lnameVal = document.getElementById("lname").value;
    var emailVal = document.getElementById("email").value;
    
    
    var emailCheck = /.+\@+.+/; //bilo_sta @ bilo_sta
    
    
    if(fnameVal != "")//prvo ime
    {
        if(lnameVal != "")// pa prezime
        {
            if(emailCheck.test(emailVal)) // na kraju mail 
            {
                alert("Thank you for subscribing to our newsletter !");
                window.location.href="index.html";//prebaci na pocetnu
                
            }
            else
            {
                alert("Please enter a valid email address");
            }
        }
        else
        {
            alert("Please enter a valid Last Name");
        }
    }
    else
    {
        alert("Please enter a valid First Name");
    }
}




function loadXML()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          formirajNiz(this);
      }
    };
    xhttp.open("GET", "shows.xml", true);
    xhttp.send();
}



function formirajNiz(xml)//stavlja xml u niz i zove funkciju za popunjavanje opcija u options bar i fju za prikaz tabele
{
    var xmlDoc = xml.responseXML;
    serije = xmlDoc.getElementsByTagName("SHOW");
    
    
    popuniOpcije(serije);
    prikaziSerije();
}


function addShow()
{
    var title = document.getElementById("title").value;
    var genre = document.getElementById("genre").value;
    var length = document.getElementById("length").value;
    var year = document.getElementById("year").value;
    var rating = document.getElementById("rating").value;
    var description = document.getElementById("description").value;

  

    console.log(title, genre , length , year , rating , description);


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var resp = xhttp.responseXML;
          console.log(resp);

          var show = resp.createElement("SHOW");

          var titleXML = resp.createElement("TITLE");
          titleXML.appendChild(resp.createTextNode(title));

          var genreXML = resp.createElement("GENRE");
          genreXML.appendChild(resp.createTextNode(genre));

          var lengthXML = resp.createElement("LENGTH");
          lengthXML.appendChild(resp.createTextNode(length));

          var yearXML = resp.createElement("YEAR");
          yearXML.appendChild(resp.createTextNode(year));

          var ratingXML = resp.createElement("RATING");
          ratingXML.appendChild(resp.createTextNode(rating));

          var descriptionXML = resp.createElement("DESCRIPTION");
          descriptionXML.appendChild(resp.createTextNode(description));


          show.appendChild(titleXML);
          show.appendChild(genreXML);
          show.appendChild(lengthXML);
          show.appendChild(yearXML);
          show.appendChild(ratingXML);
          show.appendChild(descriptionXML);

          alert("Klik");

          console.log(show);


          xhttp.responseXML.documentElement.appendChild(show);

            

      }
    };

  
    
    xhttp.open("GET", "shows.xml", true);
    xhttp.send(null);


}


function prikaziSerije()
{
    var mestoZaTabelu = document.getElementById("mestoZaTabelu");
    
    var pretragaString = document.getElementById("showSearch").value;
    
    var selektovanZanr = document.getElementById("selectionBarGenre").value;
    
    
    
    var tabela = "<tr> <th>Title</th> <th>Genre</th> <th>Length</th> <th>Year</th> <th>Rating</th> </tr>";
    
    for(i = 0 ; i < serije.length ; i++)
    {
        
        var title = serije[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
        
        if(title.indexOf(pretragaString) > -1 || title == null)//provera za search preko imena serije
        {
         
            var genre = serije[i].getElementsByTagName("GENRE")[0].childNodes[0].nodeValue;
            
            if(genre == selektovanZanr || selektovanZanr == "All")//provera za zanr
            {
                tabela += "<tr onclick = 'displayShowDescription("+i+")'>";

                tabela += "<td>";
                tabela += serije[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
                tabela += "</td>";

                tabela += "<td>";
                tabela += serije[i].getElementsByTagName("GENRE")[0].childNodes[0].nodeValue;
                tabela += "</td>";

                tabela += "<td>";
                tabela += serije[i].getElementsByTagName("LENGTH")[0].childNodes[0].nodeValue;
                tabela += "</td>";

                tabela += "<td>";
                tabela += serije[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
                tabela += "</td>";

                tabela += "<td>";
                tabela += serije[i].getElementsByTagName("RATING")[0].childNodes[0].nodeValue; 
                tabela += "</td>";

                tabela += "</tr>";
            }
        }
    }
    
    
    
    indeksSort = document.getElementById("selectionBarYearRating").selectedIndex;//skuplja vrednost od optiona
    
    mestoZaTabelu.innerHTML = tabela;
    
    if(indeksSort == 0)
        sortTableYearAsc();
    else if(indeksSort == 1)
        sortTableYearDesc();
    else if(indeksSort == 2)
        sortTableRatingDesc();
    else if(indeksSort == 3)
        sortTableRatingAsc();
}


function sortTableYearDesc()//sortiranje po godini opadajuce
{
    ;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("mestoZaTabelu");
    
    switching = true;
    
    
    
    
    while (switching) 
    {
     
      switching = false;
      var rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) 
      {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[3];
        y = rows[i + 1].getElementsByTagName("td")[3];
   
        if (x.innerHTML < y.innerHTML) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
    
}

function sortTableYearAsc()
{

    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("mestoZaTabelu");
    
    switching = true;
    
    
    
    
    while (switching) 
    {
      
      switching = false;
      var rows = table.rows;
     
      for (i = 1; i < (rows.length - 1); i++) 
      {
      
        shouldSwitch = false;
       
        x = rows[i].getElementsByTagName("td")[3];
        y = rows[i + 1].getElementsByTagName("td")[3];
        
       
        
        
        
        if (x.innerHTML > y.innerHTML) {
         
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
    
}

function sortTableRatingDesc()
{
   
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("mestoZaTabelu");
    
    switching = true;
    
    
    
    
    while (switching) 
    {
      
      switching = false;
      var rows = table.rows;
     
      for (i = 1; i < (rows.length - 1); i++) 
      {
        
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("td")[4];
        y = rows[i + 1].getElementsByTagName("td")[4];
        
       
        
        
        
        if (x.innerHTML < y.innerHTML) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
       
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function sortTableRatingAsc()
{
    
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("mestoZaTabelu");
    
    switching = true;
  
    
    
    
    while (switching) 
    {
      
      switching = false;
      var rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) 
      {
       
        shouldSwitch = false;
       
        x = rows[i].getElementsByTagName("td")[4];
        y = rows[i + 1].getElementsByTagName("td")[4];
        
     
        if (x.innerHTML > y.innerHTML) {
          
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}


function displayShowDescription(i)//izbacuje opis za selektovanu seriju
{
    var string = "";
    var descriptionBox = document.getElementById("opisTekst");
    
    
  
    string += "<b>"+serije[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"</b>";
    string += "<br><br>Description: <br><br>";
    string += serije[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue;
     
    
    
    
    
    descriptionBox.innerHTML = string;
   
 
    
}

function popuniOpcije(serije)//uzima zanrove za options
{
    var i;
    for(i = 0 ; i < serije.length ; i++)
    {
        zanrovi[i] = serije[i].getElementsByTagName("GENRE")[0].childNodes[0].nodeValue;
    }
   
    zanrovi = [...new Set(zanrovi)];//cast u Set pa nazad u niz da skloni duplikate 
    
    var opcijeString = "<option>All</option>";
    
    for(i = 0 ; i < zanrovi.length ; i++)
    {
        //console.log(zanrovi[i]);
        opcijeString += "<option>";
        opcijeString += zanrovi[i];
        opcijeString += "</option>";
        
    }
    
    
    var mestoZaOpcije = document.getElementById("selectionBarGenre");
    mestoZaOpcije.innerHTML = opcijeString;
   
    
    
   
}