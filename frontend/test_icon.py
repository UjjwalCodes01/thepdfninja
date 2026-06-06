from PIL import Image
img = Image.open('app/icon.png')
print(img.getpixel((0,0)))
