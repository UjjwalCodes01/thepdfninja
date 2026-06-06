from PIL import Image

# Read the icon
img = Image.open('app/icon.png').convert("RGBA")
print(f"icon size: {img.size}")

datas = img.getdata()
newData = []

# Assuming the background is black (0,0,0) or very dark
# And the icon is orange
for item in datas:
    # item is (R, G, B, A)
    # If it's pure black, make it fully transparent
    if item[0] == 0 and item[1] == 0 and item[2] == 0:
        newData.append((0, 0, 0, 0))
    elif item[0] < 15 and item[1] < 15 and item[2] < 15:
        # Near black, probably anti-aliasing against black
        newData.append((0, 0, 0, 0))
    else:
        # Keep the original pixel
        newData.append(item)

img.putdata(newData)
img.save('app/icon.png', "PNG")
print("Saved transparent icon to app/icon.png")
