class TasksController < ApplicationController
  def new
    @task = Task.new
  end

  def create
    @task = Task.create(task_params)
    redirect_to root_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :note, :completed)
  end
end
