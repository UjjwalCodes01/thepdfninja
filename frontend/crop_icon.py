from PIL import Image

img = Image.open('public/newlogo.png').convert("RGBA")
# Get the bounding box of the non-zero alpha pixels
bbox = img.getbbox()
print(f"Original bbox: {bbox}")

# Crop to the bounding box to remove extra transparent space
cropped = img.crop(bbox)

# The icon is on the left, the text is on the right.
# Let's find the gap between the icon and the text.
# We'll scan column by column from left to right.
width, height = cropped.size
pixels = cropped.load()

gap_start = -1
in_icon = False
for x in range(width):
    # Check if this column is entirely transparent
    col_transparent = True
    for y in range(height):
        if pixels[x, y][3] > 0:  # Alpha > 0
            col_transparent = False
            break
    
    if not col_transparent:
        in_icon = True
    elif in_icon and col_transparent:
        # We found the gap!
        gap_start = x
        break

if gap_start != -1:
    print(f"Icon width found: {gap_start}")
    # Crop just the icon
    icon = cropped.crop((0, 0, gap_start, height))
    
    # Make it square by pasting it in the center of a square transparent image
    max_dim = max(icon.size)
    square = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
    offset = ((max_dim - icon.size[0]) // 2, (max_dim - icon.size[1]) // 2)
    square.paste(icon, offset)
    
    square.save('app/icon.png', "PNG")
    print("Successfully cropped icon from newlogo.png and saved to app/icon.png")
else:
    print("Could not separate icon from text.")
