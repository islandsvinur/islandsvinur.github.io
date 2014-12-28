module Hobix
class Weblog

    _ :featured,           :edit_as => :omap

    def featured
        if @featured.class == ::Array
            YAML::transfer( 'hobix.com,2004/linklist', {'links' => @featured} )
        else
           @featured
        end
    end

    def skel_sidebar( path_storage )
        months = path_storage.get_months( storage.find )
        page = Page.new( 'sidebar' )
        page.updated = Time.now
        yield :page => page, :months => months
    end
end
class Entry
    def title_urlencoded
        return title.gsub(/[&; ]/, "_")
    end
end
end
module RedCloth
  def hard_breaks; true; end
end
