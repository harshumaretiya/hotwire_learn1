class PostsController < ApplicationController
  def index
    @posts = Post.order(created_at: :desc).limit(10).offset(params[:offset] || 0)
    @offset = params[:offset].to_i + 10

    respond_to do |format|
      format.html
      format.turbo_stream
    end
  end
end
