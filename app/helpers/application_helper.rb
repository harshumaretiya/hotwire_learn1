module ApplicationHelper
  def render_icon(name, options = {})
    content_tag(:svg, options) do
      # Assuming you have a way to include the SVG paths or symbols, for example:
      content_tag(:use, '', href: "##{name}")
    end
  end
end
