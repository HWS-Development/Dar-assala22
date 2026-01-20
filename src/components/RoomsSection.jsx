import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const RoomsSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const scrollContainerRef = useRef(null);

  const filters = [
    { key: 'all', id: 'all' },
    { key: 'rooms', id: 'rooms' },
    { key: 'suites', id: 'suites' },
    { key: 'ryad', id: 'ryad' },
  ];

  const allRooms = [
    {
      id: 'superior',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      category: 'rooms',
    },
    {
      id: 'deluxe',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
      category: 'rooms',
    },
    {
      id: 'juniorSuite',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
      category: 'suites',
    },
    {
      id: 'suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      category: 'suites',
    },
    {
      id: 'suiteRyad',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      category: 'suites',
    },
    {
      id: 'suiteRoyale',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
      category: 'suites',
    },
    {
      id: 'ryad3',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      category: 'ryad',
    },
    {
      id: 'ryad4',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      category: 'ryad',
    },
    {
      id: 'ryad6',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      category: 'ryad',
    },
  ];

  const filteredRooms = activeFilter === 'all' 
    ? allRooms 
    : allRooms.filter(room => room.category === activeFilter);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="chambres" 
      className="py-16 md:py-20"
      style={{
        backgroundColor: 'var(--static-background-base-main)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="font-light"
            style={{
              fontSize: 'var(--font-size-40)',
              lineHeight: 'var(--line-height-48)',
              fontFamily: 'var(--font-family-georgia)',
              color: 'var(--static-text-base-primary)',
              fontWeight: 'var(--font-weight-400)',
            }}
          >
            {t('rooms.title')}
          </h2>
        </div>

        {/* Filters and View All Button */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={clsx(
                  'px-4 md:px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all',
                  activeFilter === filter.id
                    ? ''
                    : 'border'
                )}
                style={{
                  backgroundColor: activeFilter === filter.id 
                    ? 'var(--interactive-surface-base-set-a-level-1)' 
                    : 'var(--interactive-surface-base-set-c-level-1)',
                  color: activeFilter === filter.id 
                    ? 'var(--interactive-on-surface-base-set-c-level-1)' 
                    : 'var(--static-text-base-primary)',
                  borderColor: activeFilter === filter.id 
                    ? 'transparent' 
                    : 'var(--static-border-base-soft)',
                  borderRadius: 'var(--border-radius-rounded)',
                  fontSize: 'var(--font-size-14)',
                  fontFamily: 'var(--font-family-lucien)',
                  fontWeight: 'var(--font-weight-400)',
                }}
              >
                {t(`rooms.filters.${filter.key}`)}
              </button>
            ))}
          </div>

          {/* View All Button */}
          <button 
            className="flex items-center space-x-2 transition-colors font-medium"
            style={{
              color: 'var(--static-text-base-primary)',
              fontSize: 'var(--font-size-16)',
              fontFamily: 'var(--font-family-lucien)',
              fontWeight: 'var(--font-weight-400)',
            }}
          >
            <span>{t('rooms.viewAll')}</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" style={{ color: 'var(--static-icon-base-primary)' }} />
          </button>
        </div>

        {/* Room Cards Carousel */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="flex-shrink-0 w-[90%] sm:w-[400px] md:w-[450px] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                style={{
                  backgroundColor: 'var(--static-background-base-primary)',
                }}
              >
                {/* Room Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={t(`rooms.cards.${room.id}.title`)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Room Content */}
                <div className="p-6">
                  <h3 
                    className="mb-3"
                    style={{
                      fontSize: 'var(--font-size-20)',
                      lineHeight: 'var(--line-height-24)',
                      fontFamily: 'var(--font-family-georgia)',
                      color: 'var(--static-text-base-primary)',
                      fontWeight: 'var(--font-weight-400)',
                    }}
                  >
                    {t(`rooms.cards.${room.id}.title`)}
                  </h3>
                  <p 
                    className="mb-6 line-clamp-3"
                    style={{
                      fontSize: 'var(--font-size-16)',
                      lineHeight: 'var(--line-height-24)',
                      fontFamily: 'var(--font-family-lucien)',
                      color: 'var(--static-text-base-secondary)',
                      fontWeight: 'var(--font-weight-400)',
                    }}
                  >
                    {t(`rooms.cards.${room.id}.description`)}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <button 
                      className="flex-1 px-4 py-2.5 rounded transition-colors font-medium text-sm"
                      style={{
                        border: 'var(--border-size-m) solid var(--static-border-base-soft)',
                        backgroundColor: 'transparent',
                        color: 'var(--static-text-base-primary)',
                        fontFamily: 'var(--font-family-lucien)',
                        fontWeight: 'var(--font-weight-400)',
                        fontSize: 'var(--font-size-14)',
                        borderRadius: 'var(--border-radius-s)',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--static-border-base-strong)';
                        e.target.style.backgroundColor = 'var(--interactive-surface-base-set-b-level-2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--static-border-base-soft)';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      {t('rooms.buttons.decouvrir')} {t(`rooms.cards.${room.id}.title`)}
                    </button>
                    <button 
                      className="flex-1 px-4 py-2.5 rounded transition-colors font-medium text-sm"
                      style={{
                        backgroundColor: 'var(--interactive-surface-base-set-a-level-1)',
                        color: 'var(--interactive-on-surface-base-set-c-level-1)',
                        fontFamily: 'var(--font-family-lucien)',
                        fontWeight: 'var(--font-weight-400)',
                        fontSize: 'var(--font-size-14)',
                        borderRadius: 'var(--border-radius-s)',
                        border: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--interactive-surface-base-set-a-level-2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--interactive-surface-base-set-a-level-1)';
                      }}
                    >
                      {t('rooms.buttons.reserver')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full p-3 shadow-lg transition-colors z-10 hidden md:block"
            style={{
              backgroundColor: 'var(--interactive-surface-base-set-a-level-1)',
              color: 'var(--interactive-on-surface-base-set-c-level-1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--interactive-surface-base-set-a-level-2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--interactive-surface-base-set-a-level-1)';
            }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          {[...Array(Math.ceil(filteredRooms.length / 3))].map((_, index) => (
            <button
              key={index}
              className={clsx(
                'h-2 rounded-full transition-all',
                index === 0
                  ? 'w-8'
                  : 'w-2'
              )}
              style={{
                backgroundColor: index === 0 
                  ? 'var(--interactive-surface-base-set-a-level-1)' 
                  : 'var(--static-border-base-soft)',
              }}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
