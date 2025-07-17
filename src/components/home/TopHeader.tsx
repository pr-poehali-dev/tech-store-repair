import Icon from '@/components/ui/icon';

const TopHeader = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <a href="tel:+79241617699" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Icon name="Phone" size={16} />
              <span className="whitespace-nowrap">+7 (924) 161-76-99</span>
            </a>
            <span>•</span>
            <a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:text-green-800">
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </a>
            <span>•</span>
            <a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Icon name="Send" size={16} />
              Telegram
            </a>
            <span>•</span>
            <a href="tel:+79248638808" className="flex items-center gap-2 text-amber-600 hover:text-amber-800">
              <Icon name="Phone" size={16} />
              <span className="whitespace-nowrap">+7 (924) 863-88-08</span>
            </a>
            <span className="text-amber-600 text-xs">d Enter14 3D</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Icon name="Clock" size={16} className="inline mr-1" />
              Пн-Сб: 10:00-19:00
            </a>
            <a href="https://2gis.ru/yakutsk/search/enter14%20якутск/firm/7037402698746526/129.737441%2C62.036234/tab/reviews?m=129.737441%2C62.036234%2F17.34" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <Icon name="MapPin" size={16} className="inline mr-1" />
              П. Алексеева, 17, ТЦ "Золотые ворота"
            </a>
            <span>•</span>
            <a href="https://wa.me/79248638808" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-800">
              <Icon name="MessageCircle" size={16} className="inline mr-1" />
              d Enter14 3D WA
            </a>
            <a href="https://t.me/+79248638808" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-800">
              <Icon name="Send" size={16} className="inline mr-1" />
              d Enter14 3D TG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;