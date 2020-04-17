# SUI -  Media Gallery
We use Media Gallery to show the user visual information of the product maximizing the space that we have at our disposal.

| Status of definition      | Done                                 |
| ------------------------- | ------------------------------------ |
| Definition version number | 1.0                                  |
| Category                  | Organism                             |
| Changelog last update     | 13/04/2018                           |
| Owners                    | UX @joan l , UI @xavier t , FE@david |

## Structure

The structure of Media Gallery consists in a container (which can be fixed width or fullwidth) in which, one by one, the user can see the different images, videos, plans, 360º (or any other media) of the product. The gallery will always have controls which the user can pass the media and a clue that inform the user about the number of items available.


1. Container: can be fixed width or fullwidth.
2. Items: images, videos, plans, 360º, etc... 
3. Controls: Required. The user has control of the interface. For this same reason the Autoplay is not allowed.


1. Container

Fixed size:

- The gallery has a certain width and height. We can decide between an aspect ratio of 3:2 (as the most common aspect ratio) or other aspect ratio (4:3, 16:9, etc…).
- The different items will adapt automatically (without distortion - cropping) to the size and aspect ratio of the container that we have defined.
- The fixed size gallery has an access to the fullwidth version gallery.
![Media Gallery fixed size.](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1514364744327_Tamano+Fijo.jpg)


Fullwidth:

- The gallery occupies a specific percentage of the screen in width and height.
- The different items will adapt to the width and height of the container, always showing in its full version (we can’t cut the image).
- In desktop, the gallery is placed over a black background overlay (# 000) with 60% opacity, so that we do not lose context of the page from which we have called the gallery fullwidth.
- On mobile devices the fullwidth will be displayed in full screen (see Responsive section)
- The fullwidth gallery will always have a button (cross) at the top right to close the fullwidth mode.
![](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1514364801615_Full+Widtth.jpg)



2. Items
- As elements of the Media Gallery we can include any item that provides the user with visual information about the product: images, videos, panoramic 360º, 3D, plans, etc ...
- In the case of having more than one type of media, we will include a group button to select the type of media that user wants to visualize.
- If the user chooses video, 360º, 3D, etc ... we can choose between the visualizer of origin (youtube, matteport ...) or own visualizer (eg HTML5 video).


![](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1518174596347_Captura+de+pantalla+2018-02-09+a+las+12.09.37.png)



3. Controls

The user must have control of the information that is displayed in the Media Gallery. For this reason we have controls that will give the user necessary control of the interface:


1. Arrows (mandatory on desktop)
2. Access fullwidth (optional)
3. Close button (required)
4. Thumbnails (optional)
5. Clue Content or item counter (required)



## Behavior
#### Image transitions:

If images are one after the other (eg pass photos through the arrows): we will use a Slide transition (the new image appears from right to left - or from left to right - dragging the current image.

If images are NOT one after the other (eg selection by thumbnail): we will not apply any transition. The image pass will be instantaneous.


#### Arrows:
- Located to the right and left of the media item (image, video ...), will allow the user to advance to the next slide or go back.
- The carousel can be infinite or have a final (finite) item.
- Finite Carousel: When we reach the last item in the list of items, the arrow on the right (forward) disappears or is deactivated and we only leave the arrow on the left (backward) visible / activated.
- We can reserve a last slide to include a different content to the items (eg a contact form).
- In mobile we can decide whether to show the arrows or hide them and use a gesture (swipe) as the only way to move forward / backward in the slides. In any case, the swipe gesture will always be mandatory in mobile.
- The clickable zone to go through the items will NOT be reduced to the space of the arrows. The left half of all the space occupied by the media gallery will be clickable and a slide will rewind in the gallery. The right half of the entire space occupied by the media gallery will be clickable and a slide will advance in the gallery.
- The arrows (left / right) of the keyboard can also be used by the user to move forward or backward in the carousel.
![Flechas que nos permiten navegar entre los items.](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1514365038665_Flechas.jpg)

#### Access fullwidth:

In the case that we want to include a fullwidth version of the gallery, we will include a button to access that version in the fixed size gallery.


![Botón de acceso a la galería en modo pantalla completa.](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1514365271550_Captura+de+pantalla+2017-12-27+a+las+9.58.47.png)

#### Close fullwidth gallery:
- The fullwidth gallery will always have a button, located in the upper right, to be able to close it. A button with cross icon is advised.
- By clicking outside the media container (eg in the overlay area) we will also close the fullgallery.
- Pressing the [esc] button will work the same as the button with X icon, closing the gallery.
![Cross icon actuando cono close button de la full gallery.](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1514365317308_Captura+de+pantalla+2017-12-27+a+las+10.01.39.png)

#### Thumbnails:
- When the media gallery contains images, we can use thumbnails, placed in horizontal format and placed in the bottom of the container, aligned to the left, to be able to navigate between the different slides.
- The thumbnails will also inform the user of the number of items that are available to consume.
- If the width of the thumbnails module exceeds the width of the container, we will include some arrow controls to navigate through the thumbnails.
- When navigating between the items of the gallery through arrows, we must activate the thumbnail corresponding to the active item. The active thumbnail will always be visible.
- When clicking on the thumbnail located to the ends (right or left) we will make a small animation to make visible the adjacent thumbnail. E.g. if we click on a thumbnail located to the right of the row of thumbnails and to its right we still have more hidden thumbnails, the thumbnail pressed will move to the left to make visible the thumbnail of its right.
- The images of the thumbnails will occupy all the space reserved in the container of each item (FILL + CROP).
![Thumbnails con controles de flechas.](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1514365395860_Captura+de+pantalla+2017-12-27+a+las+10.02.58.png)

#### Clue Content:
- The media gallery should contain an item counter only on image gallery case. This counter shows the current item and the number of final items will be displayed (only images, no videos or 3D).
![Images clue content.](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1514365434138_icon_number_photos.png)




### Responsive

The fullgallery, in a mobile web environment, can be displayed in its Portrait or Landscape versions.


### Portrait version
- Images will occupy 100% of the width of the screen.
- Image module will be centered vertically.
- If there is a Thumbnails module (optional) we will place it in the bottom of the screen.
- In mobile web environment, the arrows that allow the user to advance to the next slide or go back are optional.
- On touch devices, interaction to advance to the next slide or go back, will be witch gestures: swipe right → go back; swipe left → go next. Gestures are mandatory.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_7B831A2CF80FD27F642A3A71B7A1661821C7F8C1D5B591FDAF148DD1E9FE15C5_1540458902333_Full+Width+Responsive+Portrait.jpg)



### Landscape version
- Image module will occupy 100% of the height of the available space.
- Image module will be centered horizontally.
- If there is a Thumbnails module (optional) we will place it in the bottom of the screen and separated from the image module by a distance of 8px.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_7B831A2CF80FD27F642A3A71B7A1661821C7F8C1D5B591FDAF148DD1E9FE15C5_1540459035409_Full+Width+Responsive+Landscape+2.jpg)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7B831A2CF80FD27F642A3A71B7A1661821C7F8C1D5B591FDAF148DD1E9FE15C5_1540459049166_Full+Width+Responsive+Landscape+1.jpg)



### Media Gallery Lite Version

Since most Media Gallery controls are optional (except arrows), and when adjusting the items from the media gallery to the container, this is a valid component to be used, in its minimum expression, as a media element swipe within a card component.
Being able to be used in a container of reduced size, we give the option to choose some arrows, by default, of smaller size (16x16 px).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_DD5B9044C6D96B10953DC61078FFA0987FAA25CA744A0C1F0D5B247CBD3677CB_1518176314410_Captura+de+pantalla+2018-02-09+a+las+12.36.39.png)

## Accessibility

This component should support all the recommendations that appear on the Accessibility & Inclusion Guidelines.

For this component it is recommended to pay special attention to the following recommendations:

3. Here we highlight some of the most important accessibility principles for the component. We add the number of recommendation, paste the title of the recommendation and add some extra details if needed. Please don’t include the same description text that is written at the guide.
4. Any other principles that need to be emphasized may also be added.

We don’t have to paste the general recommendations that are:
3. Focus should be visible
8. Content should be written in common language


## Links

All links for the component’s documentation should be included here (Zeplin, Them Basic, etc.).
