import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-accentGray mb-12">Контакты</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-techBlue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-techBlue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">г. Якутск<br />Ул. Петра Алексеева, 17<br />ТЦ "Золотые ворота"</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-techGreen/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-techGreen" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600"><span className="whitespace-nowrap">+7 (924) 161-76-99</span><br />Пн-Сб: 10:00-19:00</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Мессенджеры</h3>
              <div className="text-gray-600 space-y-2">
                <div><a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">WhatsApp</a></div>
                <div><a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Telegram</a></div>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Printer" className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">STL 3D</h3>
              <p className="text-gray-600"><span className="whitespace-nowrap">+7 (924) 863-88-08</span><br />
                <a href="https://wa.me/79248638808" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 mr-2">
                  <Icon name="MessageCircle" size={16} className="inline mr-1" />
                  WhatsApp
                </a>
                <a href="https://t.me/+79248638808" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Icon name="Send" size={16} className="inline mr-1" />
                  Telegram
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;