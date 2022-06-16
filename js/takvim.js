export default function tkvm()
{
                let takvim=new Date()
                let gün=takvim.getDate()
                let ay=takvim.getMonth()
                let yil=takvim.getFullYear()

                let toplam_tarih=gün+"."+(ay+1)+"."+yil
                console.log(toplam_tarih);
              return toplam_tarih
}