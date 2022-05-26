export default function tkvm()
{
                let takvim=new Date()
                let gün=takvim.getUTCDay()
                let ay=takvim.getMonth()
                let yil=takvim.getFullYear()

                let toplam_tarih=gün+"."+(ay+1)+"."+yil
              return toplam_tarih
}