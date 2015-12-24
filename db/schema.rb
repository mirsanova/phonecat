# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151224163448) do

  create_table "attachments", force: :cascade do |t|
    t.string   "file"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.integer  "attachmentable_id"
    t.string   "attachmentable_type"
  end

  add_index "attachments", ["attachmentable_id"], name: "index_attachments_on_attachmentable_id"
  add_index "attachments", ["attachmentable_type"], name: "index_attachments_on_attachmentable_type"

  create_table "details", force: :cascade do |t|
    t.text     "characteristic"
    t.integer  "phone_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "details", ["phone_id"], name: "index_details_on_phone_id"

  create_table "phones", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "status",      default: false
  end

end
