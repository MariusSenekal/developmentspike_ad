#!/usr/bin/env python3
"""
Generate ultra-high-quality favicons with crystal-clear rendering.
Uses advanced anti-aliasing and rendering techniques for maximum sharpness.
"""

from PIL import Image, ImageDraw, ImageFilter
import cairosvg
import io

def generate_high_quality_png(svg_path, output_path, size, scale_factor=4):
    """
    Generate ultra-sharp PNG from SVG using supersampling.
    
    Args:
        svg_path: Path to source SVG file
        output_path: Output PNG file path
        size: Target size (will be rendered at scale_factor * size then downscaled)
        scale_factor: Rendering multiplier for anti-aliasing (default 4x for maximum quality)
    """
    # Render at much higher resolution then downscale for superior anti-aliasing
    render_size = size * scale_factor
    
    # Convert SVG to high-res PNG with Cairo's high-quality rendering
    png_data = cairosvg.svg2png(
        url=svg_path,
        output_width=render_size,
        output_height=render_size,
        dpi=300  # High DPI for maximum detail
    )
    
    # Load the high-resolution image
    img = Image.open(io.BytesIO(png_data))
    
    # Downscale using LANCZOS (highest quality resampling)
    # This creates extremely sharp edges and clean gradients
    img_final = img.resize((size, size), Image.Resampling.LANCZOS)
    
    # Apply subtle sharpening to enhance crispness
    img_final = img_final.filter(ImageFilter.UnsharpMask(radius=0.5, percent=120, threshold=2))
    
    # Save with maximum quality settings
    img_final.save(output_path, format='PNG', optimize=True, quality=100)
    print(f"✓ Generated crystal-clear {size}x{size} PNG: {output_path}")

def generate_ico_file(svg_path, output_path):
    """
    Generate multi-resolution ICO file with ultra-sharp rendering.
    ICO files contain multiple sizes for different contexts.
    """
    sizes = [16, 32, 48, 64, 128, 256]  # Standard ICO sizes
    images = []
    
    for size in sizes:
        # Render each size at 4x resolution then downscale
        render_size = size * 4
        png_data = cairosvg.svg2png(
            url=svg_path,
            output_width=render_size,
            output_height=render_size,
            dpi=300
        )
        
        img = Image.open(io.BytesIO(png_data))
        img_sharp = img.resize((size, size), Image.Resampling.LANCZOS)
        
        # Enhance sharpness for each size
        img_sharp = img_sharp.filter(ImageFilter.UnsharpMask(radius=0.5, percent=120, threshold=2))
        images.append(img_sharp)
    
    # Save as ICO with all sizes
    images[0].save(
        output_path,
        format='ICO',
        sizes=[(img.width, img.height) for img in images],
        append_images=images[1:]
    )
    print(f"✓ Generated multi-resolution ICO: {output_path}")

def main():
    svg_source = 'public/favicon.svg'
    
    print("🎨 Generating ultra-high-quality favicons...")
    print("   Using 4x supersampling + LANCZOS downscaling + sharpening")
    print()
    
    # Generate standard favicon sizes with maximum quality
    # Using 4x supersampling (rendering at 4x size then downscaling)
    # This produces the sharpest possible results
    generate_high_quality_png(svg_source, 'public/favicon-16x16.png', 16, scale_factor=4)
    generate_high_quality_png(svg_source, 'public/favicon-32x32.png', 32, scale_factor=4)
    
    # Generate larger sizes for modern displays (Retina, 4K, etc.)
    generate_high_quality_png(svg_source, 'public/favicon-96x96.png', 96, scale_factor=4)
    generate_high_quality_png(svg_source, 'public/favicon-192x192.png', 192, scale_factor=4)
    
    # Generate "Full HD" quality favicon (1920x1920 for ultra-high-res displays)
    # This is overkill for most use cases but ensures maximum quality
    generate_high_quality_png(svg_source, 'public/favicon-512x512.png', 512, scale_factor=4)
    
    # Generate the ICO file with multiple embedded sizes
    generate_ico_file(svg_source, 'public/favicon.ico')
    
    print()
    print("✅ All favicons generated with crystal-clear quality!")
    print("   - 4x supersampling for ultra-sharp edges")
    print("   - LANCZOS resampling for optimal downscaling")
    print("   - UnsharpMask filter for enhanced crispness")
    print("   - 300 DPI rendering for maximum detail")

if __name__ == '__main__':
    main()
