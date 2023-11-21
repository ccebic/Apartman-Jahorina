interface GalleryItemProp {
   className: string;
   src: string;
   alt?: string;
}

export const GalleryItem = ({ className, src, alt = 'Apartments Jahorina' }: GalleryItemProp) => {
   return (
      <div className={className}>
         <img src={src} alt={alt} className="h-full w-full" />
      </div>
   );
};
